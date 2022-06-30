import { Prisma } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { userBadgeController } from '../db/controllers';

const userBadgeRouter = Router();

const {
  createUserBadge,
  getUserBadges,
  getUserBadge,
  updateUserBadge,
  deleteUserBadge,
} = userBadgeController;

userBadgeRouter.post('/', async (req: Request, res: Response) => {
  const { userSelector, badgeSelector } = req.body;
  const data = await createUserBadge(userSelector, badgeSelector);
  data ? res.send(JSON.stringify(data)) : res.status(400).send('Bad Request');
});

userBadgeRouter.get('/', async (req: Request, res: Response) => {
  const data = await getUserBadge(req.body);
  data ? res.send(JSON.stringify(data)) : res.status(404).send('Not Found');
});

userBadgeRouter.get('/all', async (req: Request, res: Response) => {
  const data = await getUserBadges(req.body);
  data ? res.send(JSON.stringify(data)) : res.status(404).send('Not Found');
});

userBadgeRouter.put('/', async (req: Request, res: Response) => {
  const { updateType, userBadgeSelector } = req.body;
  const data = await updateUserBadge(updateType, userBadgeSelector);
  data ? res.send(JSON.stringify(data)) : res.status(404).send('Not Found');
});

userBadgeRouter.delete('/', async (req: Request, res: Response) => {
  const data = await deleteUserBadge(req.body);
  data
    ? res.send(JSON.stringify(data))
    : res.status(404).send('Not Found and Not Deleted');
});

export { userBadgeRouter };
