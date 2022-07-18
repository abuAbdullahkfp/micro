import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/async-handler";
import { newService } from "../controllers/new.service";
import { requireAuth, validateRequest } from "@afticketing/common";
import { body } from "express-validator";

const router = Router();

router.post(
  "/api/tickets",
  requireAuth,
  [body("title").not().isEmpty().withMessage("Title is required"),
  body('price')
    .isFloat({gt: 0})
    .withMessage('Price must be greater than 0')
],
  validateRequest,
  asyncHandler(newService)
);

export { router as createTicketRouter };
