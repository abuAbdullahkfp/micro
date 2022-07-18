import { NotFoundError } from '@afticketing/common'
import {Request, Response, NextFunction } from 'express'  
import { Ticket } from '../models/ticket.model'


const showSingleTicket = async (req: Request, res: Response, next: NextFunction) => {

  const ticket = await Ticket.findById(req.params.id) 

  if (!ticket) {
    throw new NotFoundError()
  }

  res.status(200).json(ticket)
}


export {showSingleTicket}