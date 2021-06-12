const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
  name: {
    type: String,
    required: "Name of Workout is Required",
  },
  resistance: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance",
    },
  ],
  Cardio: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio",
    },
  ],
});

const Cardio = mongoose.model("Resistance", CardioSchema);

module.exports = Cardio;
