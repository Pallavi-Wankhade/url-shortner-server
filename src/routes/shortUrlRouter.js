import express from "express";
import route from "./route.json" assert { type: "json" };

import {
  getAllUrlHandler,
  getExactUrlHandler,
  submitUrlHandler,
} from "../controllers/url.js";

const shortUrlRouter = express.Router();

// shortUrlRouter.post("/", submitUrlHandler).get(getAllUrlHandler);
shortUrlRouter.route("/").post(submitUrlHandler).get(getAllUrlHandler);
shortUrlRouter.get(route.SHORTID, getExactUrlHandler);

// shortUrlRouter.post(route.URL, showAllUrl);
export default shortUrlRouter;
