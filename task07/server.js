const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http); // attach socket.io to http server
const path = require('path');

const users = {};

app.use(express.static(__dirname)); // serve static files from the current directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name);
  });

  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', {
      message: message,
      name: users[socket.id]
    });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id]);
    delete users[socket.id];
  });
});

http.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
