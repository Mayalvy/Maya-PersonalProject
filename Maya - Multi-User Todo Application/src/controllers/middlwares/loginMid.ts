import { NextFunction } from "express";
import jwt from "jwt-simple";



export async function checkUser(req: any, res: any, next: NextFunction) {
  try {
    const secret = process.env.SECRET as string;
    if (!secret) {
      throw new Error("SECRET environment variable is not defined.");
    }

    const { userId } = req.cookies;
    console.log("checkUser", userId);
    if (!userId) {
      res.status(401).send({ error: "User not found" });
      return;
    }
    //    jwt decode
    let user;
    try {
      user = jwt.decode(userId, secret);
    } catch (decodeError) {
      console.error("JWT decode failed:", decodeError);
      return res.status(401).send({ error: "Invalid token" });
    }

    console.log("Decoded user info:", user);

    if (!user || !user.userId) {
      return res.status(401).send({ error: "User not authenticated" });
    }

    req.userId = user.userId;
    req.role = user.role;
    next();
  } catch (error) {
    console.error("checkUser error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
}
