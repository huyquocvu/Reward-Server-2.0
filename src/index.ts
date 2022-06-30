// index.ts
import express, { Express, Request, Response} from 'express';
import dotenv from "dotenv";
import {routers} from "./routes"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json())

app.use('/user', routers.user);
app.use('/badge', routers.badge)
app.use('/userBadge', routers.userBadge)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server');
});

app.listen(port, () => {
    console.log(`⚡️ Server is running @ https://localhost:3000/ ⚡️`)
});

