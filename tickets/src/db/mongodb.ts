import mongoose from "mongoose";

export const connectToDb = async () => {
  return mongoose.connect(
    process.env.MONGO_URI || "mongodb://tickets-mongo-srv:27017/tickets"
  );
};
