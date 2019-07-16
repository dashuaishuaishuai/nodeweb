"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const config = require("config");
class App {
    constructor(controllers) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    listen() {
        console.log(config.get("server.port"));
        this.app.listen(3000, () => {
            console.log(`App listening on the port 3000`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map