require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes
])

const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });
//   var socket = io('http://yourDomain:port', { transports: ['websocket', 'polling', 'flashsocket'] });
const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});