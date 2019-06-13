"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get("/", (req, res) => {
            res.json({
                message: "Hello world!",
            });
        });
        this.express.use("/", router);
    }
}
exports.default = new App().express;
