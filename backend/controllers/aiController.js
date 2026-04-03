const aiservice = require("../services/aiService");

const getsummary = async (req, res) => {
  try {
    const text = req.body;
    if (!text) {
      return res.status(400).json({ error: "no text provided" });
    }

    const summary = await aiservice.summarizetext(text);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: "ai service failed", err });
  }
};

module.exports = { getsummary };
