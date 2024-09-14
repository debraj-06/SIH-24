const express =require("express")
const router=express.Router();
const {registerUsers, authUsers,getUserList,editUsers}=require("../controllers/sihController")
router.route('/').post(registerUsers);
router.route('/').get(getUserList);
router.route('/login').post(authUsers);
router.route('/edit').put(editUsers);

module.exports=router;