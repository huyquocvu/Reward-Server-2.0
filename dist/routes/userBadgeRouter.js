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
exports.userBadgeRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../db/controllers");
const userBadgeRouter = (0, express_1.Router)();
exports.userBadgeRouter = userBadgeRouter;
const { createUserBadge, getUserBadges, getUserBadge, updateUserBadge, deleteUserBadge, } = controllers_1.userBadgeController;
userBadgeRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userSelector, badgeSelector } = req.body;
    const data = yield createUserBadge(userSelector, badgeSelector);
    data ? res.send(JSON.stringify(data)) : res.status(400).send('Bad Request');
}));
userBadgeRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getUserBadge(req.body);
    data ? res.send(JSON.stringify(data)) : res.status(404).send('Not Found');
}));
userBadgeRouter.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getUserBadges(req.body);
    data ? res.send(JSON.stringify(data)) : res.status(404).send('Not Found');
}));
userBadgeRouter.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { updateType, userBadgeSelector } = req.body;
    const data = yield updateUserBadge(updateType, userBadgeSelector);
    data ? res.send(JSON.stringify(data)) : res.status(404).send('Not Found');
}));
userBadgeRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield deleteUserBadge(req.body);
    data
        ? res.send(JSON.stringify(data))
        : res.status(404).send('Not Found and Not Deleted');
}));
