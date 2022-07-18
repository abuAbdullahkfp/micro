import {Request, Response, NextFunction} from 'express'
import User from '../models/user.model'
import { BadRequestError } from '../errors/bad-request-error'
import jwt from "jsonwebtoken";
  

export const signupService = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    
    // Check whether email already exist
    const existingUser = await User.findOne({email})

    if (existingUser) {
        throw new BadRequestError('Email in use')
    }

    // Create new User
    const user = await User.create({email, password})

    // Generate jwt token 
    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!)

    // Store jwt token in cookie
    req.session = {
        jwt: userJwt
    }

    res.status(201).json(user)
}