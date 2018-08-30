import * as express from 'express';
import * as socketio from 'socket.io';
import { WelcomeController } from './basic_controllers'

//Setup our express app
const app: express.Application = express();
const port: number = 3000;

//Setup and bind our socket server
let httpServer = require('http').Server(app);
let io = require('socket.io')(httpServer);

//Basic express controller for testing only
app.use('/welcome', WelcomeController);

//On connection with socket server
io.on('connection', (socket: SocketIO.Socket) => {
    console.log('New user connected!');
});

//Deploy our express app
app.listen(port, () => {
    console.log("[INFO] Server up and running at http://localhost:3000");
});