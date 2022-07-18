import { Router } from "express";
import { signoutService } from "../controller/signout.service";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

router.post("/api/users/signout", asyncHandler(signoutService));

export { router as signoutRouter }; 
 