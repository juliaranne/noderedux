require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.json({ limit: "1mb" }));
app.listen(port, () => console.log(`Listening`));

app.post("/api/map", async (req, res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address},+${req.body.city}&key=${process.env.MAPS_API_KEY}`
    );

    const coords = await response.json();

    res.send({
      key: coords.results[0].geometry.location,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
