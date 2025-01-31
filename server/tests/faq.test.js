const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server"); // Import the Express app
const FAQ = require("../models/faqModel");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  await FAQ.deleteMany({});
});

describe("FAQ API Tests", () => {
  test("Should add a new FAQ", async () => {
    const newFAQ = { question: "What is Node.js?", answer: "A JavaScript runtime." };

    const res = await request(app).post("/api/faqs").send(newFAQ);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.question).toBe(newFAQ.question);
  });

  test("Should fetch FAQs", async () => {
    await FAQ.create({ question: "Test Q", answer: "Test A" });

    const res = await request(app).get("/api/faqs");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].question).toBe("Test Q");
  });

  test("Should return FAQs in different languages", async () => {
    const faq = await FAQ.create({
      question: "Hello",
      answer: "World",
      translations: { hi: { question: "नमस्ते", answer: "दुनिया" } },
    });

    const res = await request(app).get("/api/faqs?lang=hi");

    expect(res.statusCode).toBe(200);
    expect(res.body[0].question).toBe("नमस्ते");
  });
});
