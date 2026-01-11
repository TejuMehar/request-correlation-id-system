import express from "express";
import { testApi, errorApi } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/test", testApi);
router.get("/error", errorApi);

export default router;
