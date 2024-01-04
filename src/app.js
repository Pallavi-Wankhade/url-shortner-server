import express from "express";
import cors from "cors";
import route from "./routes/route.json" assert { type: "json" };
import status from "express-status-monitor";
import shortUrlRouter from "./routes/shortUrlRouter.js";

const app = express();

//middleware
app.use(
  cors({
    origin: process.env.SITE_ORIGIN,
  })
);
app.use(status());

//middleware to parse URL encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Attach the routes
app.use(route.URL, shortUrlRouter);
export default app;
