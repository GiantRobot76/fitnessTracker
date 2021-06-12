const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  name: {
    type: String,
    required: "Name of Exercise is Required",
  },
  distance: {
    type: Number,
    required: "Distance Convered is Required",
  },
  Duration: {
    type: Number,
    required: "Duration of Exercise is Required",
  },
});

const Cardio = mongoose.model("Resistance", CardioSchema);

module.exports = Cardio;
