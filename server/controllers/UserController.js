const ApiError = require('../error/ApiError.js');
const bcrypt = require('bcrypt');
const {User} = require('../models/models.js')
const jwt = require('jsonwebtoken');


const generateJwt = (id, username, role) => {
    return jwt.sign({id, username, role}, 'secret123')
}

class UserController {
    async registration(req, res, next) {
     const {username, password, role} = req.body;
     if (!username || !password) {
         return next(ApiError.badRequest('Incorrect username or password'))
     }
     const candidate = await User.findOne({where: {
             username: req.body.username
         } });
     if (candidate) {
         return next(ApiError.badRequest('Username has already been used'))
     }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({username, role, password: hashPassword})
        const token = generateJwt(user.id, user.user, user.role);
        return res.json({token});

    }
    async login(req, res, next) {
const {username, password} = req.body;
const user = await User.findOne({
    where: {username: req.body.username}
});
if (!user) {
    return next(ApiError.badRequest('User does not exist'))
}
let comparePassword = bcrypt.compare(password, user.password);
if (!comparePassword) {
    return next(ApiError.badRequest('Password is not correct'))
}
const token = generateJwt(user.id, user.username, user.role);
return res.json({token});

    }
    async check(req, res, next) {
const token = generateJwt(req.user.id, req.user.username, req.user.role);
return res.json({token});
    }
}

module.exports = new UserController()