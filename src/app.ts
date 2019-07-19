import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import Controller from "./module/interfaces/controller-interface";
import * as config from 'config';
import UserController from "./module/controller/user-controller";
import * as http from "http";
import * as killable from 'killable';

class App {
    app: express.Application;
    controllers: Controller[];
    server: any;

    constructor() {
        this.controllers = [new UserController()]
        this.app = express();
        this.app.set('port', config.get("server.port"));
        this.server = http.createServer(this.app);
        //加载中间件
        this.initializeMiddlewares();
        //加载路由
        this.initializeControllers(this.controllers);
    }

    // 监听端口 启动程序
    async start() {
        this.server.listen(config.get("server.port"));
        console.log(`Start Server on http://${config.server.host}:${config.get("server.port")}`);
        killable(this.server)
    }

    async shutdown() {
        return new Promise(resolve => {
            this.server[this.server.kill ? 'kill' : 'close'](() => resolve());
        })

    }

    public getServer() {
        return this.app;
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }
}

export default App;
