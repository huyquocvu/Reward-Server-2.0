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
exports.userController = void 0;
const dbConn_1 = require("../dbConn");
const { user } = dbConn_1.prisma;
const userController = {
    createUser: function (newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user.create({
                    data: newUser,
                });
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    getUsers: function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user.findMany({
                    include: {
                        userBadge: {
                            include: {
                                badge: true,
                            },
                        },
                    },
                });
                return users;
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    getUser: function (userSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user.findFirst({
                    where: userSelector,
                });
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    updateUser: function (data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user.update({ data: data, where: where });
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
    deleteUser: function (where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user.delete({ where: where });
            }
            catch (error) {
                console.warn(error);
                return;
            }
        });
    },
};
exports.userController = userController;
