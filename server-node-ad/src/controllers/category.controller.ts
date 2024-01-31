import { Request, Response } from "express";
import { categoryModel } from "../models/category.model";

export const categoryController = {
    create: async (req: Request, res: Response) => {
        try {
            let { data, status } = await categoryModel.create(req.body)
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Create Category success!"
                })
            }
            throw {
                message: "Create Category failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
    findAll: async (req: Request, res: Response) => {
        try {
            let { data, status } = await categoryModel.findAll()
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Find all category success!"
                })
            }
            throw {
                message: "Find all category failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
    findById: async (req: Request, res: Response) => {
        try {
            let { data, status } = await categoryModel.findById(Number(req.params.id))
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Find category success!"
                })
            }
            throw {
                message: "Find category failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    }
}