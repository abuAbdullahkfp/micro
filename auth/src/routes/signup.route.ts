import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { signupService } from "../controller/signup.service";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";


const router = Router();

router.post(
  "/api/users/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Email is not valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 to 20 characters"),
  ],
  validateRequest,
  asyncHandler(signupService)
); 

export { router as signupRouter };
