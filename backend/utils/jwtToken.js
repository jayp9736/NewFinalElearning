const sendToken = (user, statusCode, res) =>{
    
    //create Jwt token // from auth module 
    const token = user.getjwtToken();
    console.log(" token checked")
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 60 * 1000
        ),
        httpOnly : true
    }
    res.status(statusCode).cookie('token', token, options).json({
        success : true,
        token,
        user
    })

}

module.exports = sendToken