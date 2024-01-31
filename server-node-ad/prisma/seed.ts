import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import categories from "./categories";
import answers from "./answers";
import questions from "./questions";
(async () => {
    try {
        await prisma.category.createMany({
            data: [
                ...categories
            ]
        })
        await prisma.question.createMany({
            data: [
                ...questions
            ]
        })
        await prisma.answer.createMany({
            data: [
                ...answers
            ]
        })
    } catch (err) {
        console.log("err", err)
    }
})()