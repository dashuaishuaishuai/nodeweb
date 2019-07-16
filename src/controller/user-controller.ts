import Controller from "../interfaces/controller.interface";
import * as express from 'express';

class UserController implements Controller {
    public path = '/user';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/list`, this.getList);
    }

    private getList = async (request: express.Request, response: express.Response) => {
        response.send("hello world");
    }

}

export default UserController;
