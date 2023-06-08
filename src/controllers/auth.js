import { compare } from "bcrypt";
import { Router } from "express";
import pkg from "jsonwebtoken";
import { User } from "../models/user-schema.js";
import { FAIRY } from "../utils/config.js";

const { sign, verify } = pkg;

const AuthRouter = Router();

AuthRouter.post("/sign-in", async (request, response) => {
  const { usernameOrEmail, password } = request.body;

  const user = await User.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });

  if (!user) {
    return response.status(401).json({
      message: "Sorry, we could not find your account",
    });
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return response.status(401).json({
      message: "Wrong password!",
    });
  }

  const userAgent = request.headers["user-agent"],
    expiresIn = 60 * 60 * 12, // Access token lasts for 12 hours
    createdAt = Date.now(),
    expiresAt = createdAt + expiresIn * 1000;

  // Count the number of active tokens
  const activeTokens = user.tokens.filter(
    (token) => token.expiresAt > Date.now()
  );

  if (activeTokens.length >= user.tokensLimit) {
    return response.status(401).json({
      message: "You have reached the maximum number of sign-ins.",
    });
  }

  const token = sign({ sub: user._id }, FAIRY, { expiresIn });

  user.tokens.push({ token, createdAt, expiresAt, userAgent });
  await user.save();

  return response.status(200).json({
    email: user.email,
    token,
    username: user.username,
  });
});

AuthRouter.post("/sign-out", async (request, response) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: "Missing token",
    });
  }

  const user = await User.findOneAndUpdate(
    { "tokens.token": token },
    { $pull: { tokens: { token } } }
  );

  if (!user) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }

  return response.status(200).json({
    message: "Signed out successfully",
  });
});

export default AuthRouter;
