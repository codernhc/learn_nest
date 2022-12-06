"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encript = exports.addSalt = void 0;
const crypto = require("crypto");
function addSalt() {
    return crypto.randomBytes(3).toString('base64');
}
exports.addSalt = addSalt;
function encript(userPassword, salt) {
    return crypto.pbkdf2Sync(userPassword, salt, 10000, 16, 'sha256').toString('base64');
}
exports.encript = encript;
//# sourceMappingURL=encription.js.map