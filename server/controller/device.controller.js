const { Device, Deviceinfo } = require("../models/models")
const uuid = require("uuid")
const path = require("path");
const ApiError = require("../error/apiError");

class UseController {
    async create(req, res, next) {
        try {
            let { name, price, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))
            const device = await Device.create({ name, price, img: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    Deviceinfo.create({
                        title: i.title,
                        description: i.description,
                        deviceID: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }
    async getAll(req, res, next) {
        try {
            let { limit, page } = req.query
            limit = limit || 9
            page = page || 1
            let offset = limit * page - limit
            const devices = await Device.findAndCountAll({ limit, offset })
            return res.json(devices);
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }
    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest)
            }
            const device = await Device.findOne({ where: { id: id }, include: [{model:Deviceinfo, as: "info"}] })
            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }
}
module.exports = new UseController()