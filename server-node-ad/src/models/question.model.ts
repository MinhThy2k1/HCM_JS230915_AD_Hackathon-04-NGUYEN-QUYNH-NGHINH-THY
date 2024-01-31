import { PrismaClient } from '@prisma/client';
import { createQuestion } from '../interfaces/createQuestion.interface';
const prisma = new PrismaClient();
export const questionModel = {
    create: async (data: createQuestion) => {
        try {
            let question = await prisma.question.create({
                data: {
                    ...data
                },
                include: {
                    answers: true
                }
            })
            return {
                data: question,
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
    findById: async (questionId: number) => {
        try {
            let question = await prisma.question.findUnique({
                where: {
                    id: questionId
                },
                include: {
                    answers: true
                }
            })
            return {
                data: question,
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
    },
    findByIdWithAnswer: async (questionId: number) => {
        try {
            let question = await prisma.question.findUnique({
                where: {
                    id: questionId
                },
                include: {
                    answers: true
                }
            })
            return {
                data: question,
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
            let questions = await prisma.question.findMany({
                include: {
                    answers: true
                }
            })
            return {
                data: questions,
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
    },
    findWithConditon: async (category_Id: number, levelCondition: number, limit: number) => {
        try {
            let questions = await prisma.question.findMany({
                where: {
                    categoryId: category_Id,
                    level: levelCondition
                },
                take: limit,
                include: {
                    answers: true
                }
            })
            return {
                data: questions,
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