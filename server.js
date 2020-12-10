'use strict';

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const htmlR = require(`./routes/htmlRoutes`);
const apiR = require(`./routes/apiRoutes`);

const PORT = 3000;

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));


htmlR(app);
apiR(app);


mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));