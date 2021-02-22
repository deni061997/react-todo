import Router from "express";
import { signUp, signIn, auth } from "../controllers/user.js";
import validator from "express-validator";
import authMiddleware from "../middleware/auth.js";

const router = new Router();

router.post(
  "/signUp",
  [
    validator.check("email", "Incorrect email").isEmail(),
    validator
      .check("password", "Password must be longer than 4")
      .isLength({ min: 4 }),
  ],
  signUp
);

router.post("/signIn", signIn);
router.get("/auth", authMiddleware, auth);

export default router;
