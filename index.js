
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var connect = require('connect');
var serveStatic = require('serve-static');
const path = require('path');


app.get('/', (req, res) => {
  res.sendFile('/testServer/fobiro.html');
});


io.on('connection', (socket) => {
  console.log("user connected")
  console.log(socket.id);
  ;
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('pontkeres', (msg_2) => {
    console.log('message: ' + msg_2);
    io.emit('pontkeres', msg_2);
  });
  socket.on("ID", (myID) => {
    console.log('message: ' + myID);
    io.emit("ID",myID);
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
