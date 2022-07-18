import {Router} from 'express'
import {asyncHandler} from '../utils/async-handler'
import { showSingleTicket } from '../controllers/show.service'

const router = Router()


router.get('/api/tickets/:id',asyncHandler(showSingleTicket))


export {router as getTicketRouter}