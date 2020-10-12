import express, { Request, Response, NextFunction } from "express";

const app: express.Application = express();

const PORT = 3001;
app.set("port", PORT);

const router = express.Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.json({"response": "Hello, world"});
});

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
