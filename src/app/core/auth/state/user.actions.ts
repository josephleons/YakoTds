import { UserRegisterInterface } from "../../../domain/registration/model/user.model";
import { UserInterface } from "../model/user.model";

export namespace UserLoginAction {

    export class Register {
        static readonly type = "[User] Register User";
        constructor(public payload: UserRegisterInterface) { }
    }

    export class Login {
        static readonly type = "[User] Get User";
        constructor(public payload: UserInterface) { }
    }

    export class Logout {
        static readonly type = '[Auth] Logout';
    }


}