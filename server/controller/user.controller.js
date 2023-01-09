const ApiError = require("../error/apiError")
const { User, Basket } = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const generateJWT = (id, email, role)=>{
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UseController {
    async register(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Некоретный email или password"));
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"));
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, password: hashPassword, role })
        const basket = await Basket.create({ UserId: user.id })
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }



    async login(req, res, next) {
        const { email, password } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Некоретный email или password"));
        }
        const candidate = await User.findOne({ where: { email } })
        if (!candidate) {
            return next(ApiError.badRequest("Пользователь с таким email не найден"));
        }
        const hashPassword = bcrypt.compareSync(password, candidate.password)
        if(!hashPassword){
            return next(ApiError.badRequest("Не правельный пароль"));
        }
        const token = generateJWT(candidate.id, candidate.email, candidate.role)
        return res.json({token})
    }



    async chack(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}
module.exports = new UseController()