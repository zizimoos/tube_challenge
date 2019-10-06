import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../localsMiddleware";

const userRouter = express.Router();

// userRouter.get("/", users);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
