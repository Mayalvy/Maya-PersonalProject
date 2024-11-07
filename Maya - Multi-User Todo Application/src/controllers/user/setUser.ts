import { Request, Response } from "express";
import { User } from "../../model/userModel";
import jwt from "jwt-simple";
import bcrypt from "bcryptjs";
import "dotenv/config";

export async function register(req: Request, res: Response) {
  try {
    var salt = bcrypt.genSaltSync(10);
    const { email, password, name } = req.body;

    var hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword);
    //save username and password to database
    const user = new User({ email, password: hashedPassword, name });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "User already exists" });
    }

    await user.save();

    res.status(200).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}



export async function login(req: Request, res: Response) {
  try {
    const secret = process.env.SECRET as string;

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).send({ error: "Invalid email or password" });
    }
    const hashedPassword = user.password;

    const isPasswordValid: boolean = bcrypt.compareSync(
      password,
      hashedPassword
    );
    if (!isPasswordValid) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    //jwt
    const payload = {
      userId: user._id,
      email: user.email,
      name: user.name,
    };

    const payloadJWT = jwt.encode(payload, secret);
    console.log(payloadJWT);

    if (user) {
      res.cookie("userId", payloadJWT, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 1,
      });
      res.status(200).send({ ok: true });
    } else {
      res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
