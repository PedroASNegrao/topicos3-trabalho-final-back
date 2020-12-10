import  Router  from "express";
//const Router = require('express');


import DriverController from "./app/controllers/DriverController.js";
import ParkingController from "./app/controllers/ParkingController.js";
import ParkingSpaceController from "./app/controllers/ParkingSpaceController.js";
import getParkingLot from "./app/middleware/getParkingLot.js"

/*
const DriverController = require('./app/controllers/DriverController');
const ParkingController = require('./app/controllers/ParkingController');
const ParkingSpaceController = require('./app/controllers/ParkingSpaceController');
const getParkingLot = require('./app/middleware/getParkingLot.js');
*/

const routes = new Router();

routes.get("/", ParkingController.helloWorld)

//parkingLot
routes.get("/parkingLot", ParkingController.index)
routes.get("/parkingLot/:id", ParkingController.checkParkingLot)
routes.get("/parkingLot/parkingSpace/:id", ParkingController.checkParkingLot_ParkingSpaces)
routes.post("/parkingLot", ParkingController.store)
routes.post("/parkingLot/parkingSpace/:id", ParkingController.createParkingSpace) //checar se esse endpoint cadastra a vaga//
routes.delete("/parkingLot/:id", ParkingController.delete)

//parkingSpace
routes.post("/parkingSpace/:parkingLotId/:numberOfSpaces", getParkingLot, ParkingSpaceController.storeMany)
//routes.put("routes.post("/parkingSpace/:parkingLotId/
//routes.put("/parkingSpace/:parkingLotId

//driver
routes.get("/driver", DriverController.index);
routes.post("/driver", DriverController.store);
routes.put("/driver/:id", DriverController.update);
routes.delete("/driver/:id", DriverController.delete);

export default routes;
//module.exports = routes;

/*
routes.post("/driver/arrival/:id", DriverController.arrival)
routes.post("/driver/departure/:id", DriverController.departure)
*/