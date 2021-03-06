
import express from "express";
import routes from "./routes.js";
import cors from "cors";
//import "./database";

/*
const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
*/
class App {
    constructor() {
        this.app = cors();
        this.app = express();
        this.middlewares(); /* Declarar o muddlwares antes das rotas! */
        this.routes();
        this.app.listen(process.env.PORT || 5000);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(routes);
    }

}



//module.exports = new App().app
export default new App().app;