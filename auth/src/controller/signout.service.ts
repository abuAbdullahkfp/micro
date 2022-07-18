import { Request, Response, NextFunction } from "express";

export const signoutService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.session = null

  res.json({});
};
