const request = require("supertest"); // << install this as -D
// const expect = require("expect");
const server = require("../server"); // << the System Under Test (SUT)

describe("server", () => {
  it("db environment set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("should return data in JSON", () => {
    return request(server)
      .get("/api/jokes")
      .then(res => {
        expect(res.type).toBe("text/html");
      });
  });

  describe("POST users/login", () => {
    it("should return 200 OK", () => {
      return request(server)
        .post("/api/users/login")
        .send({ username: "User001", password: "123456" })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
