const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
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
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;