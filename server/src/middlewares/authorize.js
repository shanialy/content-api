import jwt from "express-jwt";
import { secret } from "../config/jwtConfig.js";
import refreshTokensModel from "../models/userModel/refreshToken.Model.js";
import userModel from "../models/userModel/user.Model.js";
export default authorize;

function authorize(roles = []) {
    try {

        // roles param can be a single role string (e.g. Role.User or 'User') 
        // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
        if (typeof roles === "string") {
            roles = [roles];
        }

        return [
            // authenticate JWT token and attach user to request object (req.user)
            jwt({ secret, algorithms: ['HS256'] }),
            // authorize based on user role
            async (req, res, next) => {
                console.log("3");
                const user = await userModel.findById(req.user.id);
                const refreshTokens = await refreshTokensModel.find({ userId: user.id });
                if (!user || (roles.length && !roles.includes(user.role))) {
                    // account no longer exists or role not authorized
                    return res.status(401).json({ message: 'Unauthorized 1' });
                }
                console.log("4");
                // authentication and authorization successful
                req.user.role = user.role;
                req.user.ownsToken = token => !!refreshTokens.find(x => x.token === token);
                console.log("5")
                next();
                
            }
        ]
    } catch (err) {
        console.log(err)
    }
}