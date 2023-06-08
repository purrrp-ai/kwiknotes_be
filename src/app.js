import cors from "cors";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import AuthRouter from "./controllers/auth.js";
import SignUpRouter from "./controllers/sign-up.js";
import { URI } from "./utils/config.js";
import {
  ErrorHandler,
  RequestLogger,
  UnknownEndpoint,
} from "./utils/middleware.js";
import NotesRouter from "./controllers/note.js";

const app = express();

console.log("Attemping to connect to MongoDB...");

mongoose
  .set("strictQuery", true)
  .connect(URI)
  .then(() => console.log("Connected to MongoDB."))
  .catch((error) => console.log("Error connecting to MongoDB:", error.message));

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(RequestLogger);

app.use("/api/sign-up", SignUpRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/notes", NotesRouter);

app.use(UnknownEndpoint);
app.use(ErrorHandler);

export default app;
