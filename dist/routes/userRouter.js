"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../db/controllers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const { createUser, getUser, getUsers, updateUser, deleteUser } = controllers_1.userController;
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield createUser(req.body);
    data ? res.send(JSON.stringify(data)) : res.status(400).send('Bad Request');
}));
userRouter.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getUsers();
    res.send(JSON.stringify(data));
}));
userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const input = req.body;
    const data = yield getUser(input);
    data
        ? res.send(JSON.stringify(data))
        : res.status(404).send('User Not Found');
}));
userRouter.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { input, where } = req.body;
    const data = yield updateUser(input, where);
    data
        ? res.send(JSON.stringify(data))
        : res.status(500).send('Could not update');
}));
userRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { where } = req.body;
    const data = yield deleteUser(where);
    data
        ? res.send(JSON.stringify(data))
        : res.status(500).send('Could not update');
}));
