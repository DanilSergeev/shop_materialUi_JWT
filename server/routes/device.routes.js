const Route = require("express");
const route = new Route;
const deviceControll = require("../controller/device.controller")
const ChackRoleMiddleware = require("../middleware/ChackRoleMiddleware")

route.post("/", ChackRoleMiddleware("ADMIN"), deviceControll.create)
route.get("/", deviceControll.getAll)
route.get("/:id", deviceControll.getOne)

module.exports = route;
