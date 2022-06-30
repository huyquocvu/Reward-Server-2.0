import { Prisma } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { userController } from '../db/controllers';
const userRouter = Router();

const { createUser, getUser, getUsers, updateUser, deleteUser } =
  userController;

userRouter.post('/', async (req: Request, res: Response) => {
  const data = await createUser(req.body);
  data ? res.send(JSON.stringify(data)) : res.status(400).send('Bad Request');
});

userRouter.get('/all', async (req: Request, res: Response) => {
  const data = await getUsers();
  res.send(JSON.stringify(data));
});

userRouter.get('/', async (req: Request, res: Response) => {
  const input = req.body;
  const data = await getUser(input);

  data
    ? res.send(JSON.stringify(data))
    : res.status(404).send('User Not Found');
});

userRouter.put('/', async (req: Request, res: Response) => {
  const { input, where } = req.body;
  const data = await updateUser(input, where);
  data
    ? res.send(JSON.stringify(data))
    : res.status(500).send('Could not update');
});

userRouter.delete('/', async (req: Request, res: Response) => {
  const { where } = req.body;
  const data = await deleteUser(where);
  data
    ? res.send(JSON.stringify(data))
    : res.status(500).send('Could not update');
});

export { userRouter };
