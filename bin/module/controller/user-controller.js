"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.path = '/user';
        this.router = express.Router();
        this.getList = (request, response) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.service.getAllUserList();
            response.send(result);
        });
        this.initializeRoutes();
        this.service = new user_service_1.default();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/list`, this.getList);
    }
}
exports.default = UserController;
//# sourceMappingURL=user-controller.js.map