const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  name: {
    type: String,
    required: "Name of Exercise is Required",
  },
  weight: {
    type: Number,
    required: "Weight is Required",
  },
  sets: {
    type: Number,
    required: "Number of Sets is Required",
  },
  reps: {
    type: Number,
    required: "Number of Reps is Required",
  },
  Duration: {
    type: Number,
    required: "Duration of Exercise is Required",
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
