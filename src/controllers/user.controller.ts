import { Request, Response, Router } from "express";
import userService from "../services/user.service";
const userController = Router();

userController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const users = await userService.getUsers();

    return res.status(200).json(users);
})

userController.post("/", async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body;
  const user = await userService.createUser(userData);

  return res.status(200).json(user);
})

userController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user = await userService.getUser(Number(id));

  return res.status(200).json(user);
})

userController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const userData = req.body;
  const user = await userService.updateUser(Number(id), userData);

  return res.status(200).json(user);
})

userController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user = await userService.removeUser(Number(id));

  return res.status(200).json({message: "Usuário removido com sucesso!"});
})


export default userController;