import * as dotenv from "dotenv";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "./src/middleware/logger";
import homeRoute from "./src/routes/home-route";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 80;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
