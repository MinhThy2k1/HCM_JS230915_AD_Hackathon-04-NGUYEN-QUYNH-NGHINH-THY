import axios from "axios"
import { createQuestion } from "../../../interfaces/createQuestion.interface"

export const questionApi = {
    create: async (data: createQuestion) => {
        return await axios.post(`${import.meta.env.VITE_SV_HOST}/questions`, data)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/questions`)
    },
    findById: async (questionId: number) => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/questions/${questionId}`)
    },
    findByIdWithAnswer: async (questionId: number) => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/questions/${questionId}/answer`)
    },
    findWithConditon: async (categoryId: number, level: number, limit: number) => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/questions?category=${categoryId}&level=${level}&limit=${limit}`)
    }
}