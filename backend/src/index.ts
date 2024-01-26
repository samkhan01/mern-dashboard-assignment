import express from "express";
import webApiRouters from "./routes/api";
import cors from "cors"; 

const app = express();
const port = 1573;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(webApiRouters);

app.listen(port, () => {
    console.log(`⚙️ Server is running at port : ${port}`);
});