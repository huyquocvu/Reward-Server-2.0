import { Prisma } from '@prisma/client';
import { prisma } from '../dbConn';
const { userBadge, user } = prisma;

type updateTypes = 'Reset' | 'Collect' | 'Redeem';

const userBadgeController = {
  createUserBadge: async function (
    userSelector: Prisma.userWhereUniqueInput,
    badgeSelector: Prisma.badgeWhereUniqueInput
  ) {
    try {
      const u: any = await user.findFirst({
        where: userSelector,
        include: {
          userBadge: true,
        },
      });
      for (let i = 0; i < u.userBadge.length; i++) {
        if (u.userBadge.length && u.userBadge[i].badgeId === badgeSelector.id) {
          return 'Already Enrolled in This Reward';
        }
      }
      const args = {
        data: {
          isCollected: false,
          collectedAt: null,
          isRedeemed: false,
          redeemedAt: null,
          badge: {
            connect: badgeSelector,
          },
          user: {
            connect: userSelector,
          },
        },
      };
      const e = await userBadge.create(args);
      return `Added new Reward to User ${e}`;
    } catch (error) {
      console.warn(error);
      return;
    }
  },

  getUserBadges: async function (userSelector: Prisma.userWhereUniqueInput) {
    try {
      return await userBadge.findMany({
        where: userSelector,
      });
    } catch (error) {
      console.warn(error);
      return;
    }
  },

  getUserBadge: async function (
    userBadgeSelector: Prisma.userBadgeWhereUniqueInput
  ) {
    try {
      return await userBadge.findFirst({ where: userBadgeSelector });
    } catch (error) {
      console.warn(error);
      return;
    }
  },

  updateUserBadge: async function (
    updateType: updateTypes,
    userBadgeSelector: Prisma.userBadgeWhereUniqueInput
  ) {
    try {
      const curr = await userBadgeController.getUserBadge(userBadgeSelector);

      let data = {};

      if (updateType === 'Collect') {
        if (curr?.isCollected === true) {
          return 'Already Collected Badge';
        }
        data = {
          isCollected: true,
          collectedAt: new Date(),
        };
      } else if (updateType === 'Redeem') {
        if (curr?.isCollected === false) {
          return 'Must Collect Badge before Redeeming!';
        }
        if (curr?.isRedeemed === true) {
          return 'Already Collected Badge & Redeemed Reward!';
        }
        data = {
          isRedeemed: true,
          redeemedAt: new Date(),
        };
      } else if (updateType === 'Reset') {
        data = {
          isRedeemed: false,
          redeemedAt: null,
          isCollected: false,
          collectedAt: null,
        };
      }

      return await userBadge.update({
        where: userBadgeSelector,
        data: data,
      });
    } catch (error) {
      console.warn(error);
      return;
    }
  },

  deleteUserBadge: async function (
    userBadgeSelector: Prisma.userBadgeWhereUniqueInput
  ) {
    try {
      await userBadge
        .delete({
          where: userBadgeSelector,
        })
        .catch((err) => {
          return `Failed to delete Badge ${err}`;
        });
      return 'Deleted Badge';
    } catch (error) {
      console.warn(error);
      return;
    }
  },
};

export { userBadgeController };
