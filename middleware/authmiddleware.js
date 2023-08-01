const jwt = require('jsonwebtoken');

const authUser = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.send("Token not in correct format")
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_USER_SECRET)
        // attach the user to the job routes
        req.user = { userId: payload.userId }
        next()
    } catch (error) {
        res.send(error)
    }
}

const authAdmin = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.send("Token not in correct format")
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_ADMIN_SECRET)
        // attach the user to the job routes
        req.user = { userId: payload.userId }
        next()
    } catch (error) {
        res.send(error.message)
    }
}



module.exports = {
    authUser, authAdmin
}
