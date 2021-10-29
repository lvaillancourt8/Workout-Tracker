const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Date is Required"
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Type is Required"
      },
      name: {
        type: String,
        required: "Name is Required"
      },
      duration: {
        type: Number,
        required: "Duration is Required"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;