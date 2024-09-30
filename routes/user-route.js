import express from "express"
import { getUser, loginUser, logoutUser, postUserData, registerUser } from "../controllers/user-controller.js";
import { Middleware, roleBasedMiddleware } from "../middleware/userMiddleware.js";
import upload from '../utitles/helper.js';

const userRoute = express.Router();





userRoute.post('/createUser',upload.single('image'), postUserData );
// userRoute.get("/getUser", getUserData);
// userRoute.get("/getUser/:id", getUserbyId);
// userRoute.delete("/deleteUser/:id", deleteUser);
// userRoute.put("/updateUser/:id", updateUser);
// userRoute.post("/regUser", registerUser);
userRoute.post("/loginUser", loginUser);
userRoute.post("/logoutUser", Middleware, roleBasedMiddleware(["admin", "superAdmin"]), logoutUser)
// userRoute.get("/getUser", Middleware, getUser)
export default userRoute;