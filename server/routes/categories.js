const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//Create category
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).send(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internar Server Error!" });
  }
});

// Get category by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found!" });
    }

    res.status(200).send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error!" });
  }
});

//Update category by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(200).send(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error!" });
  }
});

//Delete category by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.status(200).send(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error!" });
  }
});

module.exports = router;
