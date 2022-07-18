import { Request, Response, NextFunction } from "express";

export const asyncHandler =
  (cb: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(cb(req, res)).catch(next);
