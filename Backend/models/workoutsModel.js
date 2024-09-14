const  mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
    {
        
    title: {
      type: String,
        required: true,
        unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports=Workout;