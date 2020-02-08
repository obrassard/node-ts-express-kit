import {injectable} from "inversify";
import {User} from "../models/User";

@injectable()
export class UserService {

    public GetUser(userId: number) {
        return new User("Roger", "Tester", userId);
    }

}
