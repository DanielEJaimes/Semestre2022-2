var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class SignInModel {
    constructor() {
        this.URI = 'http://localhost:1802/api/';
        this.signIn = (email, password) => __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(`${this.URI}mysql/signIn`, {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password }),
                headers: {
                    "Content-type": "application/json"
                }
            });
            let res = yield response.json();
            return res;
        });
    }
}
