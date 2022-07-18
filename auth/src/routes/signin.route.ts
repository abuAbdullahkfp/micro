import { Router } from "express"; 
import { signinService } from "../controller/signin.service";
import { asyncHandler } from "../utils/async-handler";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";

const router = Router()


router.post(
  "/api/users/signin",
  [
    body("email")
      .isEmail()
      .withMessage("Please provide a valid Email"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("you must supply a password"),
  ],
  validateRequest,
  asyncHandler(signinService)
);



export {router as signinRouter}