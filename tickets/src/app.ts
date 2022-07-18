import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error"; 
import { createTicketRouter } from "./routes/new.route";
import { getTicketRouter } from "./routes/show.route";
import { currentUser } from "./middleware/current-user";
import { getAllTicketsRouter } from "./routes/index.route";
import {updateTicketRouter} from './routes/update.route'

export const app = express();

app.set("trust proxy", true);
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser)

app.use(createTicketRouter)  
app.use(getAllTicketsRouter)
app.use(getTicketRouter)
app.use(updateTicketRouter)

app.get("*", async () => {
  throw new NotFoundError();    
});
           
app.use(errorHandler);
                         