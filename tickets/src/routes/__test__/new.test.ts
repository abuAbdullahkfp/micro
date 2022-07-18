import request from "supertest";
import { app } from "../../app";
import { signin } from "../../test/setup";
import {Ticket} from '../../models/ticket.model'

test("has a route handler listening to /api/tickets for post requests", async () => {
  const response = await request(app).post("/api/tickets").send({});
  expect(response.status).not.toEqual(404);
});

// test("can only be accesses if the user is signed in", async () => {
//   await request(app).post("/api/tickets").send({}).expect(401);
// });

test("returns a status other than 401 if the user is signed in", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

test("returns an error if an invalid title is provided", async () => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      title: "",
      price: 10,
    })
    .expect(400);
  await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      price: 10,
    })
    .expect(400);
});

test("returns an error if an invalid price is provided", async () => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      title: "asfddf",
      price: -10,
    })
    .expect(400);

  await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      title: "sdfsdfd",
    })
    .expect(400);
});

// test("creates a ticket with valid inputs", async () => {
//   let tickets = await Ticket.find({})
//   expect(tickets.length).toEqual(0)
//   const title = 'dkjsfj'
//   await request(app)
//           .post('/api/tickets')
//           .set("Cookie", signin())
//           .send({
//             title,
//             price: 20
//           })
//           .expect(201)

//   tickets = await Ticket.find({})
//   expect(tickets.length).toEqual(1)
//   expect(tickets[0].price).toEqual(20)
//   expect(tickets[0].title).toEqual(title)
// });
