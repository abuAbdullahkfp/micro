import { connectToDb } from "./db/mongodb";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("jwt key is not defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }                                         

  try {
    await connectToDb().then(() => console.log("Connected to Db"));
    app.listen(3000, () =>
      console.log("Tickets server listening on port 3000")   
    );
  } catch (error) {
    console.log(error);
  }
};

start();
