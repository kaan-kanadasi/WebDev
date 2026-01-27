import { Router } from "express";

const weatherRouter = Router();

weatherRouter.get("/ping", (_req, res) => {
  res.json({ message: "weather route working" });
});

export default weatherRouter;
