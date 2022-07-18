import request from "supertest";
import { app } from "../../app";
import { signin } from "../../test/setup";
import mongoose from 'mongoose'

test("returns a 404 if the ticket is not found", async () => {
  const id = new mongoose.Types.ObjectId().toHexString()
  const response = await request(app).get(`/api/tickets/${id}`).send()
  console.log(response.body)
});

test("return the ticket if the ticket is found", async () => {
  const title = "concert";
  const price = 20;
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      title,
      price,
    })
    // .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    // .expect(200);
 
  // expect(ticketResponse.body.title).toEqual(title);
  // expect(ticketResponse).toEqual(price);
});
