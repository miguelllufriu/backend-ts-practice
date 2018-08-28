import * as express from 'express';
import { WelcomeController } from './basic_controllers'

const app: express.Application = express();
const port: number = 3000;

app.use('/welcome', WelcomeController);

app.listen(port, () => {
    console.log("[INFO] Server up and running at http://localhost:3000");
});