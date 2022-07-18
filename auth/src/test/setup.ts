import {MongoMemoryServer} from 'mongodb-memory-server'
import {app} from '../app'  
import mongoose from 'mongoose'
import request from 'supertest'

let mongo: MongoMemoryServer;
beforeAll(async () => {
  
  process.env.JWT_KEY = 'asdffds'
  
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

export const signin = async () => {
  const email = "test@test.com";
  const password = "password";

  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie;
};
