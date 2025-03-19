import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
    const token = req.cookies.user;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized , Please login !" ,});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token!" });
        }
        req.user = decoded;
        next();
    });
}