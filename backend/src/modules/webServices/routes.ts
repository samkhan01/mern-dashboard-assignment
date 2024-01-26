import express from "express";
import AppControllerInstance from "./Controllers/appController";
const Router = express.Router();


Router.get("/states", (req, res) => {
    AppControllerInstance.getStates(req, res)
})
Router.post("/getMinMaxDates", (req, res) => {
    AppControllerInstance.getOrderDate(req, res)
})

const apiRoutes = Router;
export default apiRoutes