import { Prisma } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { badgeController } from '../db/controllers';
const badgeRouter = Router();

const { createBadge, getBadge, getBadges, updateBadge, deleteBadge } = badgeController;

badgeRouter.post('/', async (req: Request, res: Response) => {
  const newBadge: Prisma.badgeCreateInput = req.body
  const data = await createBadge(newBadge);
  data ? res.send(JSON.stringify(data)) : res.status(400).send('Bad Request');
});

badgeRouter.get('/all', async (req: Request, res: Response) => {
  const data = await getBadges();
  res.send(JSON.stringify(data));
});

badgeRouter.get('/', async (req: Request, res: Response) => {
  const data = await getBadge(req.body);
  data
    ? res.send(JSON.stringify(data))
    : res.status(404).send('User Not Found');
});

badgeRouter.put('/', async (req: Request, res: Response) => {
  const { input, where } = req.body;
  const data = await updateBadge(input, where);
  data
    ? res.send(JSON.stringify(data))
    : res.status(500).send('Could not update');
});

badgeRouter.delete('/', async(req: Request, res: Response) => {
  const data = await deleteBadge(req.body)
  data
  ? res.send(JSON.stringify(data))
  : res.status(500).send('Could not Delete');
})

export { badgeRouter };
