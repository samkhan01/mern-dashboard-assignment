import express from "express";
import apiRoutes from "../modules/webServices/routes";
const Router = express.Router();

/** Intiate Api Routes */
Router.use(apiRoutes)

const webApiRouters = Router;

export default webApiRouters



