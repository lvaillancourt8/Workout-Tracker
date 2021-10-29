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

// Create a new workout
router.put('/workouts/:id', ({params, body}, res) => {
  db.Workout.findByIdAndUpdate(params.id, {$push: { exercises: body}})
  .then((Workoutdb) => {
    res.json(Workoutdb);
  })
  .catch(err => {
      res.json(err);
    });
});

// Get all workouts
router.get('/workouts/range', (req, res) => {
  db.Workout.find().sort({_id:-1}).limit(7)
  .then(Workoutdb => {
    res.json(Workoutdb);
  })
  .catch(err => {
    res.json(err);
  });
});


module.exports = router;