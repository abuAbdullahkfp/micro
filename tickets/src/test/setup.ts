import {MongoMemoryServer} from 'mongodb-memory-server' 
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

let mongo: MongoMemoryServer;
beforeAll(async () => {

  process.env.JWT_KEY = 'asdf'
  
  try {
    mongo = await MongoMemoryServer.create() ;
    const mongoUri = await mongo.getUri();
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.error(error, 'this is from before all')
  }


})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }

});

afterAll(async () => {
  try {
    await mongo.stop()
    await mongoose.connection.close();
  }catch (error) {
    console.log(error, 'this is from after all')
  } 
});

export const signin =  () => {
  // Build a JWT payload {id, email}

  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com'
  }

  // Create the JWT!

  const token = jwt.sign(payload, process.env.JWT_KEY!)

  // Build session object {jwt: my_jwt}
  
  const session = {jwt: token}

  // Turn that session into JSON

  const sessionJSON = JSON.stringify(session)

  // Take JSON and encode it as base64

  const base64 = Buffer.from(sessionJSON).toString('base64')

  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`]

};
