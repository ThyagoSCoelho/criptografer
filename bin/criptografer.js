"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_ts_1 = require("crypto-ts");
class Criptografer {
    constructor(mensage) {
        this._crip_key = 'a8a6s954e3x4c5sd987';
        this._mensage = mensage;
    }
    execute() {
        const encrypted = crypto_ts_1.AES.encrypt(this._mensage, this._crip_key).toString();
        console.log(encrypted);
    }
}
exports.default = Criptografer;
