import { genSalt, hash } from "bcrypt";
import { Router } from "express";
import { User } from "../models/user-schema.js";

const SignUpRouter = Router();

SignUpRouter.post("/", async (request, response) => {
  const berryClumps = 17,
    { email, username, password, password_confirmation } = request.body;

  const takenEmail = await User.findOne({ email });

  if (takenEmail)
    return response.status(409).json({
      message: "This email address is already in use.",
    });

  const takenUsername = await User.findOne({ username });

  if (takenUsername)
    return response
      .status(409)
      .json({ message: `Unfortunately, ${username} is taken` });

  if (
    !/^(?=[a-zA-Z0-9._%+-]{1,64}@([a-zA-Z0-9.-]{1,253}\.){1,5}[a-zA-Z]{2,63}$)[a-zA-Z0-9._%+-]{1,64}@([a-zA-Z0-9.-]{1,253}\.){1,5}[a-zA-Z]{2,63}$/.test(
      email
    )
  )
    return response.status(400).json({
      message: "invalid email format",
    });
  else if (
    !/^(?!.*[-.]{2,})(?![-.])[a-zA-Z0-9_.-]{3,15}(?<![-.])$/.test(username)
  )
    return response.status(400).json({
      message: "Username doesn't meet expected requirements.",
    });
  else if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.!@#$%^&*()_])[A-Za-z\d.!@#$%^&*()_]{9,}$/.test(
      password
    )
  )
    return response.status(400).json({
      message: "Password doesn't meet the expected requirement.",
    });
  else if (password !== password_confirmation)
    return response
      .status(400)
      .json({ message: "Please confirm your password." });

  const user = new User({
    username,
    email,
    password: await hash(password, await genSalt(berryClumps)),
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

export default SignUpRouter;
