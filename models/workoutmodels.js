//schema object
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema object
const workouts = new Schema({
  day: {
    type: Number,
    default: new Date(),
  },
  exercises: Array,
  versionKey: false,
});

//link schema
const Workout = mongoose.model("Workout", workouts);

//export schema
module.exports = Workout;