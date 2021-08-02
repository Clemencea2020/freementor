import  express  from "express";

import userController from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/signup",userController.signupUser);
userRoute.get("/all",userController.getAllUsers);
//userRoute.get("/:id",userController.findOneUser);
userRoute.delete("/:id",userController.deleteUsers);



//userRoute.patch("/:id",userController.UpdateUser);
export default userRoute;

