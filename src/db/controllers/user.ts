import { Prisma } from '@prisma/client';
import { prisma } from '../dbConn';

const { user } = prisma;
const userController = {
  createUser: async function (newUser: Prisma.userCreateInput) {
    try {
      return await user.create({
        data: newUser,
      });
    } catch (error) {
      console.warn(error);
      return;
    }
  },
  getUsers: async function () {
    try {
      const users = await user.findMany({
        include: {
          userBadge: {
            include: {
              badge: true,
            },
          },
        },
      });
      return users;
    } catch (error) {
      console.warn(error);
      return;
    }
  },
  getUser: async function (userSelector: Prisma.userWhereUniqueInput) {
    try {
      return await user.findFirst({
        where: userSelector,
        include: {userBadge: {
          include: {
            badge: true
          }
        }}
      });
    } catch (error) {
      console.warn(error);
      return;
    }
  },
  updateUser: async function (
    data: Prisma.userUpdateInput,
    where: Prisma.userWhereUniqueInput
  ) {
    try {
      return await user.update({ data: data, where: where });
    } catch (error) {
      console.warn(error);
      return;
    }
  },
  deleteUser: async function (where: Prisma.userWhereUniqueInput) {
    try {
      return await user.delete({ where: where });
    } catch (error) {
      console.warn(error);
      return;
    }
  },
};

export { userController };
