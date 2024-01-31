export interface question {
    id: number,
    name: string,
    createdAt: Date,
    content: string,
    level: number,
    categoryId: number,
    answers: answer[]
}
interface answer {
    id: number,
    is_answer: boolean,
    content: string,
    createdAt: Date,
    questionId: number
}