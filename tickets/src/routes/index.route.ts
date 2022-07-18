import { Router } from "express"; 
import { asyncHandler } from "../utils/async-handler";
import { getAllTickets } from "../controllers/index.service";

const router = Router()


router.get('/api/tickets', asyncHandler(getAllTickets))

export {router as getAllTicketsRouter}