import { Router } from "express";
import { verfiedToken } from "./token.middlwares.js";

const ValidateRoutes = Router()

ValidateRoutes.use("/api", verfiedToken)

export default ValidateRoutes