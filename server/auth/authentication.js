import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  let token = req.headers.authorization;
   token = token.split(" ")
  token = token[1]
  
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, "This-is-my-secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};
