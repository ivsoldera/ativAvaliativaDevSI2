import { ResultSetHeader } from  "mysql2";  
import IAnimal from "../interfaces/animal.interface";
import connection from "./connection";

const getAll = async (): Promise<IAnimal[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM animals'
    );
    return rows as IAnimal[];
}

const create = async (Animal: IAnimal): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO animals (nome, tipo, idUserAdotou) VALUES (?, ?, ?)',
      [Animal.nome, Animal.tipo, Animal.idUserAdotou]
  );
  return result;
}

const update = async (id: number, Animal: IAnimal): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
      'UPDATE animals SET nome = ?, tipo = ?, idUserAdotou = ? WHERE id = ?',
      [Animal.nome, Animal.tipo, Animal.idUserAdotou, id]
  );
  return result;
}

const getAnimal = async (id: number): Promise<IAnimal> => {
  const [rows] = await connection.execute(
      'SELECT * FROM animals WHERE id = ?', [id]
  );
  const [animal] = rows as IAnimal[];
  return animal;
}

const remove = async (id: number): Promise<void> => {
  await connection.execute(
      'DELETE FROM animals WHERE id = ?', [id]
  );
}

export default { getAll, create, update, getAnimal, remove };