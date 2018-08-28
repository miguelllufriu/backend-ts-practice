import { Router, Request, Response } from "express";

const router: Router = new Router();

router.get('/', (req: Request, res: Response) => {
    console.log("[INFO] Access to default route of WelcomeController");
    res.send("Hello world!");
});

router.get('/:name', (req: Request, res: Response) => {
    
    let name: string = req.params.name;

    console.log("[INFO] Access by WelcomeController with params ", req.params);

    res.send(`Hello ${name}!`);
});


export const WelcomeController: Router = router;