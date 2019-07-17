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
class MysqlConnection {
    constructor(connection) {
        this.connection = connection;
    }
    execute(sql, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //增加数组参数的判断,execute(`sql query`, 1, 2, 3) 等价 execute(`sql query`, [ 1, 2, 3])
                if (params.length === 1 && params[0] instanceof Array)
                    params = [...params[0]];
                // 传参校验
                params = params.map(item => (item === undefined ? null : item));
                console.log(this.connection);
                let [rows] = yield this.connection.execute(sql, params);
                return rows;
            }
            catch (e) {
                throw e;
            }
        });
    }
    beginTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.connection.beginTransaction();
        });
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.connection.commit();
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.connection.rollback();
        });
    }
    release() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection.release();
        });
    }
}
exports.default = MysqlConnection;
//# sourceMappingURL=connection.js.map