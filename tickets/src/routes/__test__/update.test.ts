import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { signin } from "../../test/setup";

test("returns a 404 if the provided id does not exit", async () => {
  // const id = new mongoose.Types.ObjectId().toHexString()
  // await request(app).put('/api/tickets'+id)
  //     .set('Cookie', signin())
  //     .send({
  //       title: 'sdfkl',
  //       price: 20
  //     })
  // .expect(404)
});

test("returns a 401 if the user is not authenticated", async () => {
  // const id = new mongoose.Types.ObjectId().toHexString();
  // await request(app)
  //   .put("/api/tickets" + id)
  //   .send({
  //     title: "sdfkl",
  //     price: 20,
  //   });
  // .expect(401)
});

test("returns a 401 if the user does not own the ticket", async () => {
  // const response = await request(app)
  //   .post("/api/tickets")
  //   .set("Cookie", signin())
  //   .send({
  //     title: "dfjkls",
  //     price: 20,
  //   });

  // await request(app)
  //   .put(`/api/tickets/${response.body.id}`)
  //   .set("Cookie", signin())
  //   .send({
  //     title: "ddfdsf",
  //     price: 200,
  //   });
  // .expect(401)
});

// test("returns a 400 if the user provide an inva lid title", async () => {
//   const cookie = signin();
//   const response = await request(app)
//     .post("/api/tickets")
//     .set("Cookie", cookie)
//     .send({
//       title: "skldkfj",
//       price: 20,
//     });

//   await request(app)
//     .put("/api/tickets" + response.body.id)
//     .set("Cookie", cookie)
//     .send({
//       title: "",
//       price: 20,
//     });
//   // .expect(400)

//   await request(app)
//     .put("/api/tickets" + response.body.id)
//     .send({
//       title: "sdfd",
//       price: -30,
//     });
//   // .expect(400)
// });

// test("updates the ticket provided valid inputs", async () => {
//   const cookie = signin();
//   const response = await request(app)
//     .post("/api/tickets")
//     .set("Cookie", cookie)
//     .send({
//       title: "skldkfj",
//       price: 20,
//     });

//     await request(app)
//           .put('/api/tickets'+response.body.id)
//           .set('Cookie', cookie)  
//           .send({
//             title: 'new Title',
//             price: 200
//           })
//           // .expect(200)

//     const ticketResponse = await request(app)
//               .get('/api/tickets'+response.body.id)
//               .send()

//     // expect(ticketResponse.body.title).toEqual('new title')
//     // expect(ticketResponse.body.price).toEqual(100)
// });
