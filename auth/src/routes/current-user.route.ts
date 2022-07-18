import {Router} from 'express'
import {currentUser} from '../middleware/current-user'
import { currentUserService } from '../controller/current-user.service'
import { asyncHandler } from '../utils/async-handler'

const router = Router()

router.get('/api/users/currentuser', currentUser, asyncHandler(currentUserService))

export {router as currentUserRouter}