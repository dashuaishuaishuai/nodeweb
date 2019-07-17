class MysqlConnection {
    constructor(private connection: any) {
    }

    async execute(sql, ...params): Promise<any> {
        try {
            //增加数组参数的判断,execute(`sql query`, 1, 2, 3) 等价 execute(`sql query`, [ 1, 2, 3])
            if (params.length === 1 && params[0] instanceof Array)
                params = [...params[0]];
            // 传参校验
            params = params.map(item => (item === undefined ? null : item));
            console.log(this.connection)
            let [rows] = await this.connection.execute(sql, params);
            return rows;
        } catch (e) {
            throw e;
        }

    }

    async beginTransaction() {
        return this.connection.beginTransaction();
    }

    async commit() {
        return this.connection.commit();
    }

    async rollback() {
        return this.connection.rollback();
    }

    async release() {
        this.connection.release();
    }

}

export default MysqlConnection;
