import express from "express";
import routes from "../routes";
import { postAddComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
