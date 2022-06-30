import { userRouter } from './userRouter';
import { badgeRouter } from './badgeRouter';
import { userBadgeRouter } from './userBadgeRouter';

const routers = {
  user: userRouter,
  badge: badgeRouter,
  userBadge: userBadgeRouter,
};

export { routers };
