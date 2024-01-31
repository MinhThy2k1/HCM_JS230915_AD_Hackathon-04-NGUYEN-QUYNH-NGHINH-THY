import axios from "axios"
import { createCategory } from "../../../interfaces/createCategory.interface"


export const categoryApi = {
    create: async (data: createCategory) => {
        return await axios.post(`${import.meta.env.VITE_SV_HOST}/categories`, data)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/categories`)
    },
    findById: async (categoryId:number) => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/categories/${categoryId}`)
    },
}