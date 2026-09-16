console.log("Starting status server...");

const express = require("express");
const app = express();
const port = 3000;

app.get("/status/pve", (req, res) => {
  res.statusCode(200).json({ status: "ok" });
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});