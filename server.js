//modules
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//port
const PORT = process.env.PORT || 3000;

//express
const app = express();

//url+JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder
app.use(express.static("public"));

//mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

//server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});