import { Request, Response, Router } from "express";
import animalService from "../services/animal.service";
const animalController = Router();

animalController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const animals = await animalService.getAnimals();

    return res.status(200).json(animals);
})

animalController.post("/", async (req: Request, res: Response): Promise<Response> => {
  const animalData = req.body;
  const animal = await animalService.createAnimal(animalData);

  return res.status(200).json(animal);
})

animalController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const animal = await animalService.getAnimal(Number(id));

  return res.status(200).json(animal);
})

animalController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const animalData = req.body;
  const animal = await animalService.updateAnimal(Number(id), animalData);

  return res.status(200).json(animal);
});

animalController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const Animal = await animalService.removeAnimal(Number(id));

  return res.status(200).json({message: "Animal removido com sucesso!"});
});

export default animalController;