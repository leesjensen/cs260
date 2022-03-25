const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/dynamic', (req, res, next) => {
  res.send('<h1>Hello from dynamic content!<h1>');
});

app.use(express.json());
app.post('/user/:id', function (req, res) {
  res.send({ responseName: req.body.name });
});

app.listen(5090, () => {
  console.log(`Listening on port 5090`);
});

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

let connections = [];

wss.on('connection', function connection(ws) {
  const connectionId = getConnectionID();
  connections.push({ id: connectionId, conn: ws });
  ws.on('message', function message(data) {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    connections.forEach((client) => {
      if (client.id !== connectionId) {
        client.conn.send(`${connectionId} said "${msg}"`);
      }
    });
  });

  ws.send('Hello from server');

  setInterval(() => ws.send(`Hey ${connectionId} talk to me`), 30000);
});

let nextId = 0;
function getConnectionID() {
  return ++nextId;
}
