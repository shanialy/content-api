import userService from "../../services/userServices/user.Service.js"
export {
    register,
    verifyEmail,
    authenticate
}

function register(req, res, next) {
    userService.register(req.body, req.hostname)
        .then(() => res.json({ message: 'Registration successful, please check your email for verification instructions' }))
        .catch(next);
}


function verifyEmail(req, res, next) {
    userService.verifyEmail(req.body)
        .then(() => res.json({ message: 'Verification successful, you can now login' }))
        .catch(next);
}


function authenticate(req, res, next) {
    const { email, password } = req.body;
    const ipAddress = req.ip;
    userService.authenticate({ email, password, ipAddress })
        .then(({ refreshToken, ...user }) => {
            setTokenCookie(res, refreshToken);
            res.json(user);
        })
        .catch(next);
}

// helper functions

function setTokenCookie(res, token) {
    // create cookie with refresh token that expires in 7 days
    const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 7*24*60*60*1000)
    };
    res.cookie('refreshToken', token, cookieOptions);
}