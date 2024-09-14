const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      unique: false,
    },
    dob: {
      type: String,
      required: true,
      unique: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isArchived:{
      type:Boolean,
      required:true,
      default:false
    },
    achievments:{
      type:Array,
      required:true,
      default:[]
    }
  },
  {
    timestamps: true,
  }
);


// will encrypt password everytime its saved
userSchema.pre('save', async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
}


const User = mongoose.model('User', userSchema);
module.exports = User;