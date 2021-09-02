const express = require("express");
const router = require("express").Router();
const path = require("path");

const app = express();
app.use(express.static("./views"));

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`server runinig on port ${PORT}`);
});

app.get("/", async (req, res) => {
  var d = new Date();

  const jours = d.getDay();
  const hours = d.getHours();

  if (jours < 6 && jours > 0 && hours > 9 && hours < 17) {
    res.sendFile(path.join(__dirname, "../ws-express/views", "HomePage.html"));
  } else {
    res.sendFile(path.join(__dirname, "../ws-express/views", "index1.html"));
  }
});
