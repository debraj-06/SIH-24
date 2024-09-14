const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const sihSChema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);


// will encrypt password everytime its saved
sihSChema.pre('save', async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

sihSChema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
}


const Sih = mongoose.model('SiH', sihSChema);
module.exports = Sih;