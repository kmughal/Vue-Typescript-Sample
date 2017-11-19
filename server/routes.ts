import * as express from "express";
import * as path from "path";
export namespace Routes {
    export class Index {
        public route(req: express.Request, res: express.Response, next: express.NextFunction) {
            const fileAbsolutePath = path.resolve(__dirname, "./index.html");
            res.send(fileAbsolutePath);
        }
    }
}