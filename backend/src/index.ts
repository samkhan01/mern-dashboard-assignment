import express from "express";
import webApiRouters from "./routes/api";
import cors from "cors";

const app = express();
const port = 1573;

/** Middleware for the public data */
app.use(express.static("public"));

/** Midlleware to return json */
app.use(express.json());

/** Allow Cross-Origin Resource Sharing */
app.use(cors());

/** Merge APi Routes */
app.use(webApiRouters);

/** listing server */
app.listen(port, () => {
    console.log(`⚙️ Server is running at port : ${port}`);
});