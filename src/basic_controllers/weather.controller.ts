import { Router, Request, Response } from "express";

const router: Router = new Router();

router.get('/', (req: Request, res: Response) => {
    console.log("[INFO] Access to default route of WeatherController");
    res.send("Hello world!");
});

router.get('/getweather', (req: Request, res: Response) => {
    
    let name: string = req.params.name;

    console.log("[INFO] Access by WeatherController with params ", req.params);

    res.send(`You are trying to access to the last weather info. Check it out later, we are developing this.`);
});


export const WelcomeController: Router = router;