require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.listen(port, () => console.log(`Listening`));

app.post("/api/map", function (req, res) {
  res.send({
    key: "secret key",
  });
});
