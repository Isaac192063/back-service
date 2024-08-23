import { Router } from "express";
import carroRouter from "./carro.router.js";

const indexRouter = Router();

indexRouter.use("/api", carroRouter);

export default indexRouter;