import Controller from "../interfaces/controller-interface";
import * as express from 'express';
import UserService from "../service/user-service";

class UserController implements Controller {
    public path = '/user';
    public router = express.Router();
    service: UserService;

    constructor() {
        this.initializeRoutes();
        this.service = new UserService();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/list`, this.getList);
    }

    private getList = async (request: express.Request, response: express.Response) => {
        let result = await this.service.getAllUserList();
        response.send(result);

    }


}

export default UserController;
