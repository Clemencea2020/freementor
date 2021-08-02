import express from "express"
import sessionController from "../controllers/sessionController.js";


const sessionRoute = express.Router();

sessionRoute.post("/signup",sessionController.sessionRequest);
sessionRoute.get("/all",sessionController.getAllsessions);
//sessionRoute.get("/:id",sessionController.getOnesession);
sessionRoute.delete("/:id",sessionController.deletesession);



//sessionRoute.patch("/:id",sessionController.Updateonesession);



export default sessionRoute;
