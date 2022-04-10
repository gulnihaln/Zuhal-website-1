import { Router } from "express";
import path from "path";
const router = Router();
router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

export default router;
