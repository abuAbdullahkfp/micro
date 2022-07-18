import { NotFoundError, NotAuthorizedError } from '@afticketing/common'
import {Request, Response, NextFunction} from 'express'

import { Ticket } from '../models/ticket.model'

const updateTicketService = async (req: Request, res: Response, next: NextFunction) => {

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    throw new NotFoundError()
  }

  if (ticket.userId !== req.currentUser!.id ) {
    throw new NotAuthorizedError()
  }

  ticket.set({
    title: req.body.title,
    price: req.body.price
  })

  await ticket.save()

  res.send(ticket)
}

export {updateTicketService}