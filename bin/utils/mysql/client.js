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
const promise_1 = require("mysql2/promise");
const connection_1 = require("./connection");
class Mysql {
    constructor(config) {
        this.config = config;
        this.pool = promise_1.createPool(config.get("database"));
    }
    /**
     * 获取连接
     */
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return new connection_1.default(yield this.pool.getConnection());
        });
    }
    //直接获取连接,并执行语句,然后返回结果
    execute(sql, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.getConnection();
            yield connection.beginTransaction();
            try {
                return yield connection.execute(sql, ...params);
                yield connection.commit();
            }
            catch (e) {
                yield connection.rollback();
                throw e;
            }
            finally {
                yield connection.release();
            }
        });
    }
}
exports.default = Mysql;
//# sourceMappingURL=client.js.map