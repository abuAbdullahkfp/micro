import { Request, Response, NextFunction } from "express";
import { NotAuthorizeError } from "../errors/not-authorize-error";
import jwt from 'jsonwebtoken'
import User from "../models/user.model";

export const signinService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const {email, password} = req.body

  const existingUser = await User.findOne({email})

  if (!existingUser) {
    throw new NotAuthorizeError('Invalid Credentials')
  }
  
  const matchPassword = await existingUser.findByCredentials(password)  


if (!matchPassword) {
  throw new NotAuthorizeError("Invalid Credentials");
}
// Generate JWT
const userJwt = jwt.sign(
  {
    id: existingUser.id,
    email: existingUser.email,
  },
  process.env.JWT_KEY!
  );  
  

// Store it on session object
req.session = {
  jwt: userJwt,
};

res.status(200).json(existingUser);
};
