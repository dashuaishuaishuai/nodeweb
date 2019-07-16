// 引入
const mysql = require('mysql2');
// 创建数据库连接
const connection = mysql.createConnection({
    host: 'rm-2zelq3943mjlt840bzo.mysql.rds.aliyuncs.com',
    user: 'spd',
    password: 'ZAQ!2wsx',
    database: 'spdkf20190604',
    charset: 'utf8',
});
// 简单查询
connection.query('select * from department_return limit 10', function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
});
//# sourceMappingURL=mysql.js.map