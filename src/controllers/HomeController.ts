import {controller, httpGet, request, response} from "inversify-express-utils";
import {BaseController} from "./BaseController";
import {Request, Response} from "express";

@controller("/")
export class HomeController extends BaseController {

    @httpGet('/')
    private async get(@request() req: Request, @response() res: Response) {
        return this.render(res, 'index', {welcomeMessage: "Hello World !"});
    }
}
