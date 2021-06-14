const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Type of Exercise is Required",
      },
      name: {
        type: String,
        required: "Name of Exercise is Required",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
