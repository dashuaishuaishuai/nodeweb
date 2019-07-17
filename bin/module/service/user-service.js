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
const client_1 = require("../../utils/mysql/client");
const config = require("config");
class UserService {
    constructor() {
        this.mysql = new client_1.default(config);
    }
    /**
     * 查询所有列表
     */
    getAllUserList() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `select * from sys_dict`;
            return yield this.mysql.execute(sql);
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user-service.js.map