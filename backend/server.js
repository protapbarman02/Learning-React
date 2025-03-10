const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid"); // Import UUID
const config = require("./config");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`✅ Connected to MongoDB: ${config.MONGO_URI}`))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Define Schema (Collection: healthy_food)
const FoodSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true }, // Unique UUID
    name: { type: String, required: true, unique: true },
  },
  { collection: "healthy_food" } // Force collection name
);

const FoodItem = mongoose.model("FoodItem", FoodSchema);

// test
app.get("/api/test", async (req, res) => {
  try {
    res.json({ status: "success" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 📌 Get all food items
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await FoodItem.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 📌 Add a new food item
app.post("/api/foods", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Food name is required" });

    const newFood = new FoodItem({ id: uuidv4(), name });
    await newFood.save();
    res.json(newFood);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// // 📌 Update food item by id
// app.put("/api/foods/:id", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const updatedFood = await FoodItem.findOneAndUpdate(
//       { id: req.params.id },
//       { name },
//       { new: true }
//     );

//     if (!updatedFood)
//       return res.status(404).json({ error: "Food item not found" });

//     res.json(updatedFood);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// 📌 Delete food item by id
app.delete("/api/foods/:id", async (req, res) => {
  try {
    const deletedFood = await FoodItem.findOneAndDelete({ id: req.params.id });

    if (!deletedFood)
      return res.status(404).json({ error: "Food item not found" });

    res.json({ message: "Food item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start Server
app.listen(config.PORT, () =>
  console.log(`🚀 Server running on port ${config.PORT}`)
);
