const Play = require('../models/Play');

const uploadPlay = async (req, res) => {
  const { title, author, scenes } = req.body;
  try {
    const newPlay = new Play({ title, author, scenes });
    await newPlay.save();
    res.status(201).json(newPlay);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { uploadPlay };