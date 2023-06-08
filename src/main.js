import http from "http";
import app from "./app.js";
import { PORT } from "./utils/config.js";

http
  .createServer(app)
  .listen(PORT, () => console.log("Server running on port:", PORT));
