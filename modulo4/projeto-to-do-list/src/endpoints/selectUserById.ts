import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";


export default async function createUser (req: Request, res: Response) {
    try {
        const { id } = req.params

        const user = await selectUserById(Number(id))

        if (!user[0]) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user[0])
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}