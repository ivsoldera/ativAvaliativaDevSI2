import { hash } from 'bcrypt';
import IUser from "../interfaces/user.interface";
import userModel from "../models/user.model";

const getUsers = (): Promise<IUser[]> => {
    return userModel.getAll();
}

const getUser = (id: number): Promise<IUser> => {
  return userModel.getUser(id);
}

const createUser = async (user: IUser): Promise<IUser> => {
  const hashedPassword = await hash(user.password, 8);
  user.password = hashedPassword.toString();
  const { insertId } = await userModel.create(user); 
  user.id = insertId;
  return user;
}

const updateUser = async (id: number, user: IUser): Promise<IUser> => { // Partial<IUser>, não obriga a passar todos os requisitos da interface
  const hashedPassword = await hash(user.password, 8);
  user.password = hashedPassword.toString();
  await userModel.update(id, user); 
  user.id = id;
  return user;
}

const removeUser = async (id: number): Promise<void> => {
  await userModel.remove(id); 
}

export default { getUsers, getUser, createUser, updateUser, removeUser };