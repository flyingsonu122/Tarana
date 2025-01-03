const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("songs.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
