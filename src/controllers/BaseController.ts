import {Response} from "express";
import {injectable} from "inversify";

@injectable()
export abstract class BaseController {

    public render(res: Response, template: string, options = {}): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            res.render(template, options, (err, compiled) => {
                if (err) {
                    console.log(err);
                    reject('500 when rendering the template');
                }
                resolve(compiled);
            });
        });
    }

}
