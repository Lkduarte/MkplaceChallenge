import { Request, Response } from "express";
import ServiceSeller from '../service/ServiceSeller'

const SellerController = {

    async createSeller(req: Request, res: Response): Promise<Response> {

        const bodyData = req.body

        try {

            const newSeller = await ServiceSeller.createSeller(bodyData)
            return res.status(200).json(newSeller)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async listAllSellers(req: Request, res: Response): Promise<Response> {

        try {

            const sellers = await ServiceSeller.listAllSellers()
            return res.status(200).json(sellers)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async listAllSellersBySector(req: Request, res: Response): Promise<Response> {

        const { sector } = req.params

        try {

            const sellers = await ServiceSeller.listAllSellersBySector(sector)
            return res.status(200).json(sellers)

        } catch (err) {

            return res.status(400).json(err)

        }
    },


    async findById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const seller = await ServiceSeller.findById(id)
            return res.status(200).json(seller)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async fyndByName(req: Request, res: Response): Promise<Response> {

        const { name } = req.params

        try {

            const sellers = await ServiceSeller.fyndByName(name)
            return res.status(200).json(sellers)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async updateSeller(req: Request, res: Response): Promise<Response> {


        const { id } = req.params;
        const bodyData = req.body

        try {

            const UpdatedSeller = await ServiceSeller.updateSeller(id, bodyData)
            return res.status(200).json(UpdatedSeller)

        } catch (err) {

            return res.status(400).json(err)

        }

    },

    async deleteSeller(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const deletedSeller = await ServiceSeller.deleteSeller(id)
            return res.status(200).json(deletedSeller)

        } catch (err) {

            return res.status(400).json(err)

        }

    }
}

export default SellerController