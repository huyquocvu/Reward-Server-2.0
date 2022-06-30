import { Prisma } from '@prisma/client';
import { prisma } from '../dbConn';
const {badge} = prisma;
const badgeController = {
    createBadge: async function(data: Prisma.badgeCreateInput){
        return await badge.create({
            data: data
        });
    },
    getBadges: async function(){
        const badges = await badge.findMany();
        return badges;
    },
    getBadge: async function(args: Prisma.badgeFindFirstArgs) {
        return await badge.findFirst(args);
    },
    updateBadge: async function(data: Prisma.userUpdateInput, where: Prisma.userWhereUniqueInput){
        return await badge.update({
            data: data, where: where
        })
    },
    deleteBadge: async function(where: Prisma.userWhereUniqueInput){
        return await badge.delete({where: where})
    }
}

export {badgeController}