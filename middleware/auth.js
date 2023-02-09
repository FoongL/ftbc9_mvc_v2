const jwt = require('jsonwebtoken')

const authJWT = async(req, res, next)=>{
    try{
        const authToken = req.header("Authorization").replace('Bearer ','')
        const verifiedToken = jwt.verify(authToken, process.env.JWT_SECRET)
        req.user = verifiedToken
        next()
    }catch (err){
        return res.status(403).json({success: false, msg:'invalid JWT'})
    }
}

module.exports = authJWT