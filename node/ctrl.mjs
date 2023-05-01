import { Router } from "express";
import { errorHandler } from "./errors.mjs";
import { getImages } from "./logic.mjs";

const router = Router();

router.get(
  "/",
  errorHandler(async (req, res) => {
    const { page, per_page, category } = req.query;
    const query = {
      page,
      per_page,
      category,
    };
    const result = await getImages(query);
    res.send(result);
  })
);

export default router;
