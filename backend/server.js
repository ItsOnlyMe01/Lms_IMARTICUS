require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const courseRoutes = require("./routes/CourseRoute");
const documentRoutes = require("./routes/DocumentRoute");
const aiRoutes = require("./routes/aiRoute");

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

app.use("/courses", courseRoutes);
app.use("/documents", documentRoutes);
app.use("/ai", aiRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.error("Failed to connect", err));

// app.get("/", (req, res) => {
//   res.send("server is running");
// });

//-------------deployment-------------------------------------------

const __dirnamePath = path.resolve();

app.use(express.static(path.join(__dirnamePath, "../frontend/dist")));
app.use((req, res) => {
  res.sendFile(path.join(__dirnamePath, "../frontend/dist/index.html"));
});

//-------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
