const Route = require("express");
const route = new Route;
const deviceRoute = require("./device.routes");
const userRoute = require("./user.routes");


route.use("/user",  userRoute)
route.use("/device", deviceRoute)

module.exports = route;
