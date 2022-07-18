import { NextFunction, Request, Response } from "express";
import { Ticket } from "../models/ticket.model";


export const getAllTickets = async (req: Request, res: Response, next: NextFunction) => {

  const tickets = await Ticket.find({})
  
  res.status(200).json(tickets)

}