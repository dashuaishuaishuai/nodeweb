import Service from "../interfaces/service-interface";
import Mysql from "../../utils/mysql/client";
import * as config from 'config';

class UserService implements Service {
    mysql: Mysql;

    constructor() {
        this.mysql = new Mysql(config)
    }

    /**
     * 查询所有列表
     */
    async getAllUserList(){
        let sql=`select * from sys_dict`;
       return await this.mysql.execute(sql)
    }
}

export default UserService;
