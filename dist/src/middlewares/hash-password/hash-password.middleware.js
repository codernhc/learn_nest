"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashPasswordMiddleware = void 0;
const common_1 = require("@nestjs/common");
const encription_1 = require("../../utils/encription");
let HashPasswordMiddleware = class HashPasswordMiddleware {
    use(req, res, next) {
        console.log("req", req.body);
        let userPassword = req.body['password'];
        const salt = (0, encription_1.addSalt)();
        if (userPassword) {
            userPassword = (0, encription_1.encript)(userPassword, salt);
            req.body['password'] = userPassword;
            req.body['salt'] = salt;
        }
        next();
    }
};
HashPasswordMiddleware = __decorate([
    (0, common_1.Injectable)()
], HashPasswordMiddleware);
exports.HashPasswordMiddleware = HashPasswordMiddleware;
//# sourceMappingURL=hash-password.middleware.js.map