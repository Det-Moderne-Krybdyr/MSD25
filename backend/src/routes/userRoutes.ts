import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ id: 1, name: "Julius", email: "julius@test.com" });
});
export default router;
