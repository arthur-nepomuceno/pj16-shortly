import { Router } from "express";
import getUserData from "../controllers/user/getUserData.js";
import getRanking from "../controllers/user/getRanking.js";

const userRouter = Router();

userRouter.get('/users/me', getUserData);
userRouter.get('/ranking', getRanking);

export default userRouter