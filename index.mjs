import express from "express";
import imageRouter from "./ctrl.mjs";

const port = process.env.PORT || 4000;
const app = express();

// setup routers
app.use("/images", imageRouter);

app.listen(port, () => console.log("excellent"));
