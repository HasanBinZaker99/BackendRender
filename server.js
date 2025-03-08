const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const uri =
  "mongodb+srv://mdhbz99d:plyPbyF3GGqBFKw4@cluster0.c1urh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define Mongoose Schema & Model
const inputSchema = new mongoose.Schema({ text: String });
const Input = mongoose.model("Input", inputSchema);

// API endpoint to save input data
app.post("/save", async (req, res) => {
  try {
    const newInput = new Input({ text: req.body.text });
    await newInput.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("❌ Error saving data:", error);
    res.status(500).json({ error: "Error saving data" });
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
