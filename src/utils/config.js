import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

export const URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.NODE_ENV === "development"
    ? process.env.DEV_MONGODB_URI
    : process.env.MONGODB_URI;

export const FAIRY = process.env.FAIRY;
