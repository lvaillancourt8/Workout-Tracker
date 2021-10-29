const db = require("../models");
const router = require('express').Router();

//Get all workouts
router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(Workoutdb => {
      res.json(Workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;