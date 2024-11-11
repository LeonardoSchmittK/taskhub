const request = require("supertest");
const app = require("../index");

describe("GET /users", () => {
  beforeAll(async () => {
    const token = jwt.sign(
      {
        _id: 1,
        email: "teste@teste.com",
        name: "teste",
        admin: false,
      },
      process.env.jwt_secret_key
    );

    cookie = response.header["set-cookie"][0];
  });

  it("Deve retornar a lista de usuários com os campos corretos", async () => {
    return await request(app)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("#TODO LIST ALL ROUTES");
      });
  });

  it("Id inexistente para comentário", async () => {
    return await request(app)
      .get(`/comments/3232332`) // esse id não existe
      .then((response) => {
        expect(response.status).toBe(500);
      });
  });

  it("Id inexistente para usuario", async () => {
    return await request(app)
      .get(`/users/3232332`) // esse id não existe
      .then((response) => {
        expect(response.status).toBe(500);
      });
  });

  it("Retornar usuarios", async () => {
    return await request(app)
      .get(`/users`)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
});
