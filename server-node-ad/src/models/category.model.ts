import { PrismaClient } from '@prisma/client';
import { createCategory } from '../interfaces/createCategory.interface';

const prisma = new PrismaClient();
export const categoryModel = {
    create: async (data: createCategory) => {
        try {
            let category = await prisma.category.create({
                data: {
                    ...data
                },
                include: {
                    questions: {
                        include: {
                            answers: true
                        }
                    }
                }
            })
            return {
                data: category,
                status: true,
                err: null
            }
        } catch (err: any) {
            console.log('err', err)
            return {
                err,
                status: false,
                data: null
            }
        }
    },
    findById: async (categoryId: number) => {
        try {
            let category = await prisma.category.findUnique({
                where: {
                    id: categoryId
                },
                include: {
                    questions: {
                        include: {
                            answers: true
                        }
                    }
                }
            })
            return {
                data: category,
                status: true,
                err: null
            }
        } catch (err) {
            console.log('err', err)
            return {
                err,
                status: false,
                data: null
            }
        }
    }
    ,
    findAll: async () => {
        try {
            let categories = await prisma.category.findMany({
                include: {
                    questions: {
                        include: {
                            answers: true
                        }
                    }
                }
            })
            return {
                data: categories,
                status: true,
                err: null
            }
        } catch (err) {
            console.log('err', err)
            return {
                err,
                status: false,
                data: null
            }
        }
    }

}