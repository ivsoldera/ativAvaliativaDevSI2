import { Router } from "express";
import userController from "./controllers/user.controller";
import animalController from "./controllers/animal.controller";

const routers = Router();

routers.use("/users", userController);
routers.use("/animals", animalController);

export default routers;