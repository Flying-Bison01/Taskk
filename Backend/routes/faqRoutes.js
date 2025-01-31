const express = require("express");
const { addFAQ, getFAQs } = require("../controllers/faqController");
const router = express.Router();

router.post("/faqs", addFAQ);
router.get("/faqs", getFAQs);

module.exports = router;
