import {Request, Response , NextFunction} from 'express'


export const currentUserService = async (req: Request, res: Response, next: NextFunction) => {
  
  res.json({ currentUser: req.currentUser || null });

}