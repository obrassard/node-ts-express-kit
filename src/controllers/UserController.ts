import {controller, httpGet, requestParam} from "inversify-express-utils";
import {UserService} from "../services/UserService";
import {inject} from "inversify";
import TYPES from "../constant/types";

@controller("/users")
export class UserController {

    private userService: UserService;

    constructor(@inject(TYPES.UserService) userService: UserService) {
        this.userService = userService;
    }

    @httpGet("/:id")
    private getUser(@requestParam("id") id: number) {
        return this.userService.GetUser(id);
    }
}
