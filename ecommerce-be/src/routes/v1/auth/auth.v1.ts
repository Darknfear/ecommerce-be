import { Router } from "express";

const authRouter = Router();

authRouter.get("/auth", (req, res) => {
  res.status(200).json({
    message: "Auth route",
  });
});

export { authRouter };