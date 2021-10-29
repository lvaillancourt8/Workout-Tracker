const db = require("../models");
const router = require('express').Router();

// Get all workouts
router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(Workoutdb => {
      res.json(Workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

// Create a new workout
router.post('/workouts', ({body}, res) => {
    db.Workout.create(body)
    .then((Workoutdb) => {
      res.json(Workoutdb);
    })
    .catch(err => {
        res.json(err);
      });
});



module.exports = router;