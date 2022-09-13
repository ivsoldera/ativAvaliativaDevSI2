import { ResultSetHeader } from  "mysql2";  
import IUser from "../interfaces/user.interface";
import connection from "./connection";

const getAll = async (): Promise<IUser[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM users'
    );
    return rows as IUser[];
}

const create = async (user: IUser): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO users (name, email, role, password) VALUES (?, ?, ? , ?)',
      [user.name, user.email, user.role, user.password]
  );
  return result;
}

const update = async (id: number, user: IUser): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
      'UPDATE users SET name = ?, email = ?, role = ?, password = ? WHERE id = ?',
      [user.name, user.email, user.role, user.password, id]
  );
  return result;
}

const getUser = async (id: number): Promise<IUser> => {
  const [rows] = await connection.execute(
      'SELECT * FROM users WHERE id = ?', [id]
  );
  const [user] = rows as IUser[];
  return user;
}

const remove = async (id: number): Promise<void> => {
  await connection.execute(
      'DELETE FROM users WHERE id = ?', [id]
  );
}

export default { getAll, create, update, getUser, remove };