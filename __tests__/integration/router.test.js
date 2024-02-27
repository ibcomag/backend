const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const baseURL = `http://localhost:${port}/api/v1`;

const api = axios.create({ baseURL });
api.interceptors.response.use(null, console.log);

const routers = ["/devotionals", "/articles", "/musics", "/books"];

describe.each(routers)("Testes for router %s", (router) => {
  it("Test for get all", async () => {
    const response = await api.get(router);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });

  it("Test for get by id", async () => {
    const response = await api.get(router);
    const { id } = response.data[0];
    const record = await api.get(`${router}/${id}`);
    expect(record.status).toBe(200);
    expect(record.data).toHaveProperty("id");
  });
});
