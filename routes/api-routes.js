const router = require("express").Router();
const db = require("../models");
// get all workouts
router.get("/api/workouts", (req, res) => {
  console.log("Getting all workouts....");
  db.Workout.find({})
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add a workout
router.put("/api/workouts/:id", (req, res) => {
  console.log("Adding a new workout....");
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }}, {new: true} )
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create a workout
router.post("/api/workouts", (req, res) => {
  console.log("Creating a new workout....");
  db.Workout.create(req.body)
    .then((req, res) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get a range of workouts
router.get("/api/workouts/range", (req, res) => {
  console.log("Getting workouts in range....");
  db.Workout.find({})
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
