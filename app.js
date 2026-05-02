const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.json({
        status: "alive",
        message: "hello world",
        time: new Date().toISOString()
    });
} );
app.get("/health", (req, res) => {
  res.json({ healthy: true });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});