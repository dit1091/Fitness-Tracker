'use strict';

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const htmlR = require(`./routes/htmlRoutes`);
const apiR = require(`./routes/apiRoutes`);
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = 3000;

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));


htmlRoutes(app);
apiRoutes(app);


mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, 
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dit1091:>@cluster0.bxcpm.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();


app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));