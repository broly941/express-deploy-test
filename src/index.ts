import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "./middleware/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 80;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/about", (req, res) => {
  res.send("Heroku express practice");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
