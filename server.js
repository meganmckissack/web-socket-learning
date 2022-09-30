const path = require('path');

const express = require('express');

const port = 8000;
const app = express();
const server = require('http').Server(app);


server.listen(port, () => {
  console.log(`server listening on port ${ port }`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static('public'));


const io = require('socket.io')(server);
  io.on('connection', (socket) => {
  socket.on('message', (text) => {
    console.log(`received message: "${ text }"`);
  });

  // socket.on('press', () => {
  //   console.log('received a press event');
  // });

  // socket.on('press', () => {
  //   io.emit('pressResponse');
  //   socket.emit('myPress');
  //   socket.broadcast.emit('notMyPress');
  // });

  socket.on('tap', (data) => {
    console.log(`tap at ${ data.x }, ${ data.y }`);  //(0, 0) is top left
  });

  
 });
 



// const WebSocket = require('ws');

// //allows the server to send and recieve messages rather than static assets
// const WebSocketServer = new WebSocket.Server({ server });

// //prepares to listen for connections opened by clients 
// WebSocketServer.on('connection', (socket) => {
//   //when connection is open, listen for incoming messages and log the text of the message
//   socket.on('message', (text) => {
//     console.log(`received message: "{ text }"`);
//   });
// });