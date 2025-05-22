import { Router } from "express";
import { authRouter } from "./auth/auth.v1";

const v1Router = Router();

v1Router.use("/auth", authRouter);

export { v1Router };
