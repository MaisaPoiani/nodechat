const express = require('express')
const cors = require('cors')

const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1273827",
    key: "4e55f3526b70e0aaedef",
    secret: "4085b52caf7d8f634cb7",
    cluster: "us2",
    useTLS: true
});

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async(req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
      });

      res.json([]);
})
console.log('porta 8000');
app.listen(8000)