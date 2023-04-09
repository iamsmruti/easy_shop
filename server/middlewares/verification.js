import jwt from 'jsonwebtoken'

export const verify = (req, res, next) => {
    const token = req.header('auth_token')

    if(!token){
        req.isAuth = false
        next()
    }

    let user
    try {
        user = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (err) {
        req.isAuth = false
        next()
    }

    if(!user) {
        req.isAuth = false
        next()
    }

    req.isAuth = true
    req.user = user
    next()
}