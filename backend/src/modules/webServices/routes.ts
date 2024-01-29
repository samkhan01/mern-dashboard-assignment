import express from "express";
import AppControllerInstance from "./Controllers/appController";
const Router = express.Router();

/** Router For the unique states list */
Router.get("/states", (req, res) => {
    AppControllerInstance.getStates(req, res)
})

/** Router Of the sales data based on user input */
Router.post("/states-sales", (req, res) => {
    AppControllerInstance.getSalesData(req, res)
})

const apiRoutes = Router;
export default apiRoutes