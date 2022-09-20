import { AES } from 'crypto-ts';

export default class Criptografer {

    private _mensage: string;
    private readonly _crip_key: string = 'a8a6s954e3x4c5sd987';

    constructor(mensage: string) {
        this._mensage = mensage;
    }

    execute() {
        const encrypted = AES.encrypt(this._mensage, this._crip_key).toString()
        console.log(encrypted)
    }
}
