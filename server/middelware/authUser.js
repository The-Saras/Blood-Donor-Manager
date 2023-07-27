require("dotenv").config()
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN;  // This should be in an environment variable in a real application

const authenticateJwt = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please authenticate with right token!!" })
    }
    try {
        const data = jwt.verify(token, SECRET)
        req.user = data.user;
        next()
    }
    catch (error) {
        res.status(401).send({ error: "Please authenticate with right token!!" })
    }

};

module.exports = {
    authenticateJwt,
    SECRET

}