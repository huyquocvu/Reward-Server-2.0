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
exports.userBadgeController = void 0;
const dbConn_1 = require("../dbConn");
const { userBadge, user } = dbConn_1.prisma;
const userBadgeController = {
    createUserBadge: function (userSelector, badgeSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const u = yield user.findFirst({
                    where: userSelector,
                    include: {
                        userBadge: true,
                    },
                });
                for (let i = 0; i < u.userBadge.length; i++) {
                    if (u.userBadge.length && u.userBadge[i].badgeId === badgeSelector.id) {
                        return 'Already Enrolled in This Reward';
                    }
                }
                const args = {
                    data: {
                        isCollected: false,
                        collectedAt: null,
                        isRedeemed: false,
                        redeemedAt: null,
                        badge: {
                            connect: badgeSelector,
                        },
                        user: {
                            connect: userSelector,
                        },
                    },
                };
                const e = yield userBadge.create(args);
                return `Added new Reward to User ${e}`;
            }
            catch (error) {
                console.warn(error);
            }
        });
    },
    getUserBadges: function (userSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userBadge.findMany({
                where: userSelector,
            });
        });
    },
    getUserBadge: function (userBadgeSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userBadge.findFirst({ where: userBadgeSelector });
        });
    },
    updateUserBadge: function (updateType, userBadgeSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            const curr = yield userBadgeController.getUserBadge(userBadgeSelector);
            let data = {};
            if (updateType === 'Collect') {
                if ((curr === null || curr === void 0 ? void 0 : curr.isCollected) === true) {
                    return 'Already Collected Badge';
                }
                data = {
                    isCollected: true,
                    collectedAt: new Date(),
                };
            }
            else if (updateType === 'Redeem') {
                if ((curr === null || curr === void 0 ? void 0 : curr.isCollected) === false) {
                    return 'Must Collect Badge before Redeeming!';
                }
                if ((curr === null || curr === void 0 ? void 0 : curr.isRedeemed) === true) {
                    return 'Already Collected Badge & Redeemed Reward!';
                }
                data = {
                    isRedeemed: true,
                    redeemedAt: new Date(),
                };
            }
            else if (updateType === 'Reset') {
                data = {
                    isRedeemed: false,
                    redeemedAt: null,
                    isCollected: false,
                    collectedAt: null,
                };
            }
            return yield userBadge.update({
                where: userBadgeSelector,
                data: data,
            });
        });
    },
    deleteUserBadge: function (userBadgeSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield userBadge
                .delete({
                where: userBadgeSelector,
            })
                .catch((err) => {
                return `Failed to delete Badge ${err}`;
            });
            return 'Deleted Badge';
        });
    },
};
exports.userBadgeController = userBadgeController;
