import { questionModel } from "../models/question.model";
import { Request, Response } from "express";
export const questionController = {
    create: async (req: Request, res: Response) => {
        try {
            let { data, status } = await questionModel.create(req.body)
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Create question success!"
                })
            }
            throw {
                message: "Create question failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
    findAll: async (req: Request, res: Response) => {
        try {
            let { data, status } = await questionModel.findAll()
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Find all question success!"
                })
            }
            throw {
                message: "Find all question failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
    findById: async (req: Request, res: Response) => {
        try {
            let { data, status } = await questionModel.findById(Number(req.params.id))
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Find question success!"
                })
            }
            throw {
                message: "Find question failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
    findByIdWithAnswer: async (req: Request, res: Response) => {
        try {
            let { data, status } = await questionModel.findById(Number(req.params.id))
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Find question success!"
                })
            }
            throw {
                message: "Find question failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
    findWithConditon: async (req: Request, res: Response) => {
        try {
            let { data, status } = await questionModel.findWithConditon(Number(req.query.category),Number(req.query.level),Number(req.query.limit))
            if (status) {
                return res.status(200).json({
                    data,
                    message: "Find question by condition success!"
                })
            }
            throw {
                message: "Find question by condition failed!"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: err.message || "Server ERROR!"
            })
        }
    },
}