// const path = require('path');
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const socketio = require('socket.io');

// const io = socketio(server);
// app.get('/', function (req, res) {
//   res.write(`<h1>Hello socket</h1> ${process.env.PORT}`);
//   res.end;
// });
// io.on('connection', client => {
//   console.log(`âš¡: ${client.id} user just connected!`);
//   client.on('send message', (data) => {
//     console.log(data);
//     io.emit('receive message', data);
//     // client.broadcast.to(message.recieverId).emit( 'message',`${obj}`);
//   });
//   client.on( 'new_notification', function(data) {
//     console.log(data.message);
//     io.sockets.emit( 'show_notification', { 
//       message: data 
//     });
//   });

//   client.on('disconnect', () => {
//     console.log('user disconnected');
//   });
  
// });


// const PORT = process.env.PORT || 8080;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));