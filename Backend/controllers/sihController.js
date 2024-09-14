const Sih = require('../models/sihModel');
const asynHandler = require('express-async-handler');
const jwtToken = require('../utils/generateTokes');

// app.use(express.bodyParser({limit: '50mb'}));
const registerUsers = asynHandler(async (req, res) => {
  const { name, password } = req.body;
  const userExist = await Sih.findOne({ name })
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }
  
//   const myBuffer = Buffer.from(pic, 'base64');
  const sih = await Sih.create({
    name, password
  })
  
  if (sih) {
    res.status(201).json({
      _id: sih._id,
      name: sih.name,
    //   pic: user.pic,
    //   email: user.email,
    //   isAdmin: user.isAdmin,
    //   phone: user.phone,
    //   dob: user.dob,
    //   achievments: user.achievments,
    //   isArchived: isArchived.isArchived,
      token: jwtToken(sih._id)
    })
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }

  res.json({
    name
  })

})
const editUsers = asynHandler(async (req, res) => {
  const { name } = req.body;
  const userExist = await Sih.findOne({ email })
//   const filter = { email: userExist.email };
  console.log("Filter1", userExist);
  // if (userExist) {
  //   res.status(400);
  //   throw new Error("User Already Exist");
  // }
  const updateDocument = {
    $set: {
      name: name,
    //   pic: pic,
    //   dob: dob,
    //   phone: phone,
    //   isArchived: isArchived,
    //   achievments: achievments


    },
  };
  const sih = await Sih.updateOne(filter, updateDocument);
  console.log("User", sih);
  if (sih) {
    res.status(200).json({
      message: `${name} updated sucessfully!!`,
      status: "sucess",
      statuscode: 200
    })
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }


})

const authUsers = asynHandler(async (req, res) => {
  const { name, password } = req.body;//desturctaring


  const sih = await Sih.findOne({ name });
  const res1 = await sih.matchPassword(password);


  if (sih && res1) {
    res.json({
      _id: sih._id,
      name: sih.name,
    //   email: user.email,
    //   isAdmin: user.isAdmin,
    //   achievments: user.achievments,
    //   isArchived: user.isArchived,
    //   pic: user.pic,

      token: jwtToken(sih._id)

    });
  } else {
    res.status(401);
    throw new Error("Invalid Name and Password");
  }


})
const getUserList = asynHandler(async (req, res) => {

  const userList = await Sih.find();
  res.json(userList);
})
module.exports = { registerUsers, authUsers, getUserList, editUsers };