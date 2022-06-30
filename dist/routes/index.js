"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const userRouter_1 = require("./userRouter");
const badgeRouter_1 = require("./badgeRouter");
const userBadgeRouter_1 = require("./userBadgeRouter");
const routers = {
    user: userRouter_1.userRouter,
    badge: badgeRouter_1.badgeRouter,
    userBadge: userBadgeRouter_1.userBadgeRouter
};
exports.routers = routers;
