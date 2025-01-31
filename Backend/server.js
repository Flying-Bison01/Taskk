const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const faqRoutes = require("./routes/faqRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", faqRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
