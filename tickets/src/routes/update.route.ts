import {Router} from 'express'
import {body} from 'express-validator'  
import { requireAuth, validateRequest, NotAuthorizedError, NotFoundError } from "@afticketing/common";
import { asyncHandler } from '../utils/async-handler';
import { updateTicketService } from '../controllers/update.service';

const router = Router()

router.put('/api/tickets/:id',requireAuth,[
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required')
  ,
  body('price')
    .isFloat({gt:0})
    .withMessage('price must be provided and must be greater than 0')
],validateRequest, asyncHandler(updateTicketService))

export {router as updateTicketRouter}