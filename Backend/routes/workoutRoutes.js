const express =require("express")
const router = express.Router();
const { getWorkouts,getWorkoutById ,createWorkout} = require('../controllers/workoutControllers');
const { protect } = require("../middlewares/authMiddlewares");
router.route('/').get(protect,getWorkouts);
router.route('/:id').get(getWorkoutById);
router.route("/create").post(protect, createWorkout);

module.exports=router;