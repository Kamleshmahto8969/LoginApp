import express from "express";
import {register} from "../controllers/User.js"
import { isAuthenticated } from "../middleware/auth.js";
import {verify,login,logout,addTask,removeTask,
    updateTask,getMyProfile,updateProfile,updatePassword,forgetPassword,resetPassword
} from "../controllers/User.js";

const router=express.Router();
router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/newtask").post(isAuthenticated, addTask);
router.route("/me").get(isAuthenticated, getMyProfile);


router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);
  router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);


export default router;
