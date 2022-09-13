import { hash } from 'bcrypt';
import IAnimal from "../interfaces/animal.interface";
import animalModel from "../models/animal.model";

const getAnimals = (): Promise<IAnimal[]> => {
    return animalModel.getAll();
}

const getAnimal = (id: number): Promise<IAnimal> => {
  return animalModel.getAnimal(id);
}

const createAnimal = async (Animal: IAnimal): Promise<IAnimal> => {
  const { insertId } = await animalModel.create(Animal); 
  Animal.id = insertId;
  return Animal;
}

const updateAnimal = async (id: number, animal: IAnimal): Promise<IAnimal> => {
  await animalModel.update(id, animal); 
  animal.id = id;
  return animal;
}

const removeAnimal = async (id: number): Promise<void> => {
  await animalModel.remove(id); 
}

export default { getAnimals, getAnimal, createAnimal, updateAnimal, removeAnimal };