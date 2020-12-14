import Router from "express";
//const Router = require('express');


import DriverController from "./app/controllers/DriverController.js";
import ParkingController from "./app/controllers/ParkingController.js";
import ParkingSpaceController from "./app/controllers/ParkingSpaceController.js";
import getParkingLot from "./app/middleware/getParkingLot.js"
import findByCredentials from "./app/middleware/findByCredentials.js"
import auth from "./app/middleware/auth.js"

/*
const DriverController = require('./app/controllers/DriverController');
const ParkingController = require('./app/controllers/ParkingController');
const ParkingSpaceController = require('./app/controllers/ParkingSpaceController');
const getParkingLot = require('./app/middleware/getParkingLot.js');
*/

const routes = new Router();

routes.get("/", ParkingController.helloWorld);

//parkingLot
routes.get("/parkingLot", ParkingController.index);
routes.get("/parkingLot/:id", ParkingController.checkParkingLot);
routes.get("/parkingLot/parkingSpace/:id", ParkingController.checkParkingLot_ParkingSpaces);
routes.post("/parkingLot/parkingSpace/:id", ParkingController.createParkingSpace); //checar se esse endpoint cadastra a vaga//
routes.post("/parkingLot", ParkingController.store);
routes.delete("/parkingLot/:id", ParkingController.delete);

//parkingSpace
routes.put("/parkingSpace/:id", ParkingSpaceController.update);
routes.delete("/parkingSpace/:id", ParkingSpaceController.delete);
routes.get("/parkingSpace/:id", ParkingSpaceController.index)
routes.patch("/parkingSpace/:id", ParkingSpaceController.isFreeUpdate)
//routes.put("routes.post("/parkingSpace/:parkingLotId/
//routes.put("/parkingSpace/:parkingLotId

//driver
routes.get("/driver", auth, DriverController.index);
routes.get("/driver/:id", auth, DriverController.indexDriver);
routes.post("/driver", DriverController.store);
routes.post("/driver/login", findByCredentials, DriverController.login)
routes.post("/driver/logout", auth, DriverController.logout)
routes.put("/driver/:id", auth, DriverController.update);
routes.delete("/driver/:id", auth, DriverController.delete);

export default routes;
//module.exports = routes;

/*
routes.post("/driver/arrival/:id", DriverController.arrival)
routes.post("/driver/departure/:id", DriverController.departure)
*/