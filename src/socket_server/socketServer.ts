import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketio from 'socket.io';

export class SocketServer {

    private static readonly port: number = 1234;
    private app: express.Application;
    private server: Server;
    private ioServer: SocketIO.Server;
    private port: number;
    
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials:false");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
            next();
          });
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = SocketServer.port;
    }

    private sockets(): void {
        this.ioServer = socketio(this.server, {'origins':'*:*'});
    }

    private listen(): void{
        this.app.listen(this.port, () =>{
            console.log('[START] Running server on port', this.port);
        });
        this.ioServer.on('connection', () => {
            console.info('New user connected!')
        });
        this.ioServer.on('disconnect', () => {
            console.warn('User disconnected!')
        });
    }

    public getServer(): express.Application{
        return this.app;
    } 
}