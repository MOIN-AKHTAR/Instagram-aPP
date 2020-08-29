const Express=require("express");
const UserController=require("../Controllers/UserController");


const Route=Express.Router();

Route.route("/signup").post(UserController.CreateUser);
Route.route("/signin").post(UserController.Signin);

module.exports=Route;