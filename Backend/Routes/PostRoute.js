const Express=require("express");
const PostController=require("../Controllers/PostController");
const {isAuth}=require("../Utils/Auth")


const Route=Express.Router();

Route.use(isAuth)
Route.route("/").post(PostController.CreatePost);
Route.route("/all").get(PostController.GetAll);
Route.route("/:pid").get(PostController.GetSinglePost)

module.exports=Route;