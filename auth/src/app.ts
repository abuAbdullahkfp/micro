import express from 'express'
import cors from 'cors'
import cookieSession from 'cookie-session'
 
import { errorHandler } from './middleware/error-handler'
import { NotFoundError } from './errors/not-found-error' 
import { signupRouter } from './routes/signup.route'
import { signinRouter } from './routes/signin.route'
import { currentUserRouter } from './routes/current-user.route'
import { signoutRouter } from './routes/signout.route'
  
export const app = express()
 
app.set("trust proxy", true);
app.use(cors())
app.use(express.json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(signupRouter)
app.use(signinRouter)  
app.use(currentUserRouter)
app.use(signoutRouter)

app.get("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler)