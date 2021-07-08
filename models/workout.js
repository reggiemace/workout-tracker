const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [{
      type:  {
          type: String,
          trim: true,
          required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      weight: {
        type: Number,
        trim: true,
        required: true
      },
      sets: {
        type: Number,
        trim: true,
        required: true
      },
      reps: {
        type: Number,
        trim: true,
        required: true
      },
      duration: {

      }
  }],
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
