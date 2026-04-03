const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const summarizetext = async (text) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });
    const prompt = `Summarize this in 3 short bullet points and start every point in next line: ${text.text}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return "failed to generate summary";
  }
};

module.exports = { summarizetext };
