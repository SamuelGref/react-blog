const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCretIndex: true,
  })
  .then(console.log("connect to MongoDB"))
  .catch((err) => consol.log(err));

app.listen("5000", () => {
  console.log("listening on port 5000");
});
