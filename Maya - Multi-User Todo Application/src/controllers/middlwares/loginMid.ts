import { NextFunction } from "express";
import jwt from "jwt-simple";

export async function checkUser(req: any, res: any, next: NextFunction) {
  try {
    const secret = process.env.SECRET as string;

    const { userId } = req.cookies;
    console.log("checkUser", userId);
    if (!userId) {
      res.status(401).send({ error: "User not found" });
      return;
    }
    //    jwt decode
    const user = jwt.decode(userId, secret);
    console.log(user);

    if (!user) {
      res.status(401).send({ error: "User not found" });
      return;
    }

    req.userId = user.userId;
    req.role = user.role;
    next();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}
