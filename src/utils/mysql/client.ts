import {createPool} from "mysql2/promise";
import MysqlConnection from "./connection";

const mysqlDebugger = require("debug")("mysql");

class Mysql {

    private readonly pool: any;

    constructor(private config: any) {
        this.pool = createPool(config.get("database"))
    }

    /**
     * 获取连接
     */
    async getConnection() {
        return new MysqlConnection(await this.pool.getConnection());
    }

    //直接获取连接,并执行语句,然后返回结果
    async execute(sql, ...params): Promise<any> {
        const connection = await this.getConnection();
        await connection.beginTransaction();
        try {
            mysqlDebugger('SQLQuery:', sql);
            mysqlDebugger('SQLParams:', params);
            return await connection.execute(sql, ...params);
            await connection.commit();
        } catch (e) {
            await connection.rollback();
            throw e;
        } finally {
            await connection.release();
        }
    }
}

export default Mysql;
