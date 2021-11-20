import { Router } from "express";

const homeRoute = Router();

homeRoute.get("/about", (req, res) => {
  res.send("About");
});

export default homeRoute;
