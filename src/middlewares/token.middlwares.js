import jsonwebtoken from "jsonwebtoken";
import environment from "../config/default.js";

export const verfiedToken = (req, res, next) => {
    const tokenOptional = req.header("Authorization");

    if (!tokenOptional) {
        return res.status(401).json({
            sucess: false,
            message: "no autorizado",
        });
    }

    if (!tokenOptional.startsWith("Bearer ")) {
        return res.status(401).json({
            sucess: false,
            message: "no autorizado",
        });
    }

    const token = tokenOptional.slice(7);

    jsonwebtoken.verify(token, environment.jwt_hash, (error, decode) => {
        if (error) {
            return res.status(401).json({
                sucess: false,
                message: "no autorizado",
            });
        }
        next();
    });
};
