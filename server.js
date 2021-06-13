const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//serve exercise.html from link on main UI
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

//serve stats.html from link on main UI
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

//get all workouts
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get all exercises
app.get("/api/exercises", (req, res) => {
  db.Exercise.find({})
    .then((db) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//post new workout
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//add exercise
app.put("/api/workouts/:id", (req, res) => {
  db.Exercise.create(req.body)
    .then(({ _id }) => {
      console.log("This is the underscore id", _id);
      console.log("The is req.params.id", req.params.id);
      db.Workout.findOneAndUpdate(
        { _id: mongojs.ObjectId(req.params.id) },
        { $push: { exercises: _id } },
        { new: true }
      );
    })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get and display workouts in range
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    // .populate("exercises")
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
