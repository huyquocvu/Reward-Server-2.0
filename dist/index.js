"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use('/user', routes_1.routers.user);
app.use('/badge', routes_1.routers.badge);
app.use('/userBadge', routes_1.routers.userBadge);
app.get('/', (req, res) => {
    res.send('Express + Typescript Server');
});
app.listen(port, () => {
    console.log(`⚡️ Server is running @ https://localhost:3000/ ⚡️`);
});
