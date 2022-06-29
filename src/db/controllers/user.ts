import { Prisma } from '@prisma/client';
import { prisma } from '../dbConn';

const { user } = prisma;
const userController = {
  createUser: async function(newUser: Prisma.userCreateInput) {
    return await user.create({
       data: newUser,
     });
   },
   getUsers: async function() {
    const users = await user.findMany({
      include: {
        userBadge: true,
      },
    });
    return users;
  },
  getUser: async function(userSelector: Prisma.userWhereUniqueInput) {
    return await user.findFirst({
      where: userSelector
    });
  },
  updateUser: async function(
    data: Prisma.userUpdateInput,
    where: Prisma.userWhereUniqueInput
  ) {
    return await user.update({ data: data, where: where });
  },
  deleteUser: async function(args: Prisma.userDeleteArgs){
    return await user.delete(args);
   }
}


export {userController};