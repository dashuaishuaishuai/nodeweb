"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const user_controller_1 = require("./module/controller/user-controller");
const app = new app_1.default([
    new user_controller_1.default()
]);
app.listen();
//# sourceMappingURL=server.js.map