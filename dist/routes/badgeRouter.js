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
exports.badgeRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../db/controllers");
const badgeRouter = (0, express_1.Router)();
exports.badgeRouter = badgeRouter;
const { createBadge, getBadge, getBadges, updateBadge, deleteBadge } = controllers_1.badgeController;
badgeRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBadge = req.body;
    const data = yield createBadge(newBadge);
    data ? res.send(JSON.stringify(data)) : res.status(400).send('Bad Request');
}));
badgeRouter.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getBadges();
    res.send(JSON.stringify(data));
}));
badgeRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getBadge(req.body);
    data
        ? res.send(JSON.stringify(data))
        : res.status(404).send('Badge Not Found');
}));
badgeRouter.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { input, where } = req.body;
    const data = yield updateBadge(input, where);
    data
        ? res.send(JSON.stringify(data))
        : res.status(500).send('Could not update');
}));
badgeRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield deleteBadge(req.body);
    data
        ? res.send(JSON.stringify(data))
        : res.status(500).send('Could not Delete');
}));
