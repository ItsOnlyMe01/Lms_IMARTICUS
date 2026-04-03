const express = require("express");
const router = express.Router();
const Document = require("../models/documents");

router.get("/:courseId", async (req, res) => {
  try {
    const idfromUrl = req.params.courseId;
    const documents = await Document.find({ courseId: idfromUrl });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
