import {Request, Response, NextFunction} from 'express'
import {Ticket} from '../models/ticket.model'

export const newService = async (req: Request, res: Response, next: NextFunction) => {
    const {title, price} = req.body
    const ticket = await Ticket.create({title, price, userId: req.currentUser!.id})
    res.status(201).json(ticket)
}  