const express = require("express");
const path = require("path");

const app = express();

// Serve your frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Optional: explicitly handle root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});