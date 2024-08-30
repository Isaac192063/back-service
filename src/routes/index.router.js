import { Router } from "express";
import carroRouter from "./carro.router.js";
import authRuter from "./auth.routes.js";

const indexRouter = Router();

indexRouter.use("/auth", authRuter);
indexRouter.use("/api", carroRouter);

export default indexRouter;