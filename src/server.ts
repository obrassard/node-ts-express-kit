import "reflect-metadata";
import {InversifyExpressServer} from "inversify-express-utils";
import {container} from "./inversify.config";
import * as bodyParser from 'body-parser';
import * as express from "express";

// Constants
const PORT = process.env.PORT || 3000;

var server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    app.use(bodyParser.json());

    // Config view engine
    app.set('views', __dirname + '/views');
    app.set('view engine', 'twig');
    app.set('twig options', {
        strict_variables: false
    });

    app.use("/public", express.static("public"));
});


var app = server.build();
app.listen(PORT);

console.log(`App listening on the port ${PORT}`);

