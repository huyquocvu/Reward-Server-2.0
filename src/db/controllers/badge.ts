import { Prisma } from '@prisma/client';
import { prisma } from '../dbConn';
const {badge} = prisma;
const badgeController = {
    createBadge: async function(data: Prisma.badgeCreateInput){
        try {
        return await badge.create({
            data: data
        });
    }  catch (error) {
        console.warn(error);
    }
    },
    getBadges: async function(){
        try {
        const badges = await badge.findMany();
        return badges;
    } catch (error) {
            console.warn(error);
            return;
    }
    },
    getBadge: async function(badgeSelector: Prisma.badgeWhereUniqueInput) {
        try {
        return await badge.findFirst({
            where: badgeSelector
        });
    }  catch (error) {
        console.warn(error);
        return;
    }
    },
    updateBadge: async function(data: Prisma.userUpdateInput, where: Prisma.userWhereUniqueInput){
        try {
        return await badge.update({
            data: data, where: where
        })
    } catch (error) {
            console.warn(error);
            return;
    }
    },
    deleteBadge: async function(where: Prisma.userWhereUniqueInput){
        try {
        return await badge.delete({where: where})
    } catch (error) {
        console.warn(error);
    }
    }
}

export {badgeController}