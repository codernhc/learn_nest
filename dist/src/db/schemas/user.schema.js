"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_interface_1 = require("../../interfaces/user.interface");
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(user_interface_1.User);
//# sourceMappingURL=user.schema.js.map