const Route = require("express");
const route = new Route;
const userControll = require("../controller/user.controller")
const authMiddleware = require("../middleware/authMiddleware")

route.post("/register", userControll.register)
route.post("/login", userControll.login)
route.get("/auth", authMiddleware, userControll.chack)

module.exports = route;
