import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./server/routes";

class Server {
    public app: express.Application;

    public static bootStrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
    }


    config() {
        this.configRoutes();
    }

    configRoutes() {
        const router: express.Router = express.Router();
        const index = new Routes.Index();
        router.get("/", index.route.bind(index.route));
        this.app.use(router);
    }
}
