import {Container} from "inversify";
import {UserService} from "./services/UserService";
import TYPES from "./constant/types";

import "./controllers/UserController";
import "./controllers/HomeController";

let container = new Container;

container.bind<UserService>(TYPES.UserService).to(UserService);

export {container}
