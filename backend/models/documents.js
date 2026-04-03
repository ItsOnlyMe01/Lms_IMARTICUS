const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    contentText: { type: String },
    courseId: {
      type: String,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Document", documentSchema);
