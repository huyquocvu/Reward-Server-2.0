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
exports.badgeController = void 0;
const dbConn_1 = require("../dbConn");
const { badge } = dbConn_1.prisma;
const badgeController = {
    createBadge: function (data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield badge.create({
                    data: data
                });
            }
            catch (error) {
                console.warn(error);
            }
        });
    },
    getBadges: function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const badges = yield badge.findMany();
                return badges;
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    getBadge: function (badgeSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield badge.findFirst({
                    where: badgeSelector
                });
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    updateBadge: function (data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield badge.update({
                    data: data, where: where
                });
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    deleteBadge: function (where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield badge.delete({ where: where });
            }
            catch (error) {
                console.warn(error);
            }
        });
    }
};
exports.badgeController = badgeController;
