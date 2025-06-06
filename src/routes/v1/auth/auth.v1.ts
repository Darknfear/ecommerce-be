import { Router } from "express";

const authRouter = Router();

authRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "Auth route v1",
  });
});

export { authRouter };
