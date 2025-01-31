const FAQ = require("../models/faqModel");
const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate();
const redisClient = require("../config/redis");

async function translateText(text, targetLang) {
  const [translation] = await translate.translate(text, targetLang);
  return translation;
}

async function addFAQ(req, res) {
  const { question, answer } = req.body;

  const translations = {
    hi: {
      question: await translateText(question, "hi"),
      answer: await translateText(answer, "hi"),
    },
    bn: {
      question: await translateText(question, "bn"),
      answer: await translateText(answer, "bn"),
    },
  };

  const faq = new FAQ({ question, answer, translations });
  await faq.save();

  await redisClient.del("faqs"); // Clear cache
  res.status(201).json(faq);
}

async function getFAQs(req, res) {
  const lang = req.query.lang || "en";

  const cacheKey = `faqs-${lang}`;
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) return res.json(JSON.parse(cachedData));

  const faqs = await FAQ.find();
  const translatedFaqs = faqs.map(faq => ({
    question: faq.translations[lang]?.question || faq.question,
    answer: faq.translations[lang]?.answer || faq.answer,
  }));

  await redisClient.setEx(cacheKey, 3600, JSON.stringify(translatedFaqs));
  res.json(translatedFaqs);
}

module.exports = { addFAQ, getFAQs };
