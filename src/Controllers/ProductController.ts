import { Request, Response } from "express";
import ServiceProduct from '../service/ServiceProduct'
import slugify from "slugify";

const ProductController = {

    async createProduct(req: Request, res: Response): Promise<Response> {

        const bodyData = req.body
        const slug = slugify(req.body.name, {
            replacement: "-",
            lower: true
        })
        const data = { slug: slug, ...bodyData }

        try {

            const newProduct = await ServiceProduct.createProduct(data)
            return res.status(200).json(newProduct)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async listAllProducts(req: Request, res: Response): Promise<Response> {

        try {

            const products = await ServiceProduct.listAllProducts()
            return res.status(200).json(products)

        } catch (err) {

            return res.status(400).json(err)

        }
    },


    async findById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const product = await ServiceProduct.findById(id)
            return res.status(200).json(product)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async fyndByName(req: Request, res: Response): Promise<Response> {

        const { name } = req.params

        try {

            const products = await ServiceProduct.fyndByName(name)
            return res.status(200).json(products)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async fyndByBrand(req: Request, res: Response): Promise<Response> {

        const { brand } = req.params

        try {

            const products = await ServiceProduct.fyndByBrand(brand)
            return res.status(200).json(products)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async fyndBySellerId(req: Request, res: Response): Promise<Response> {

        const { seller_id } = req.params

        try {

            const products = await ServiceProduct.fyndBySeller(seller_id)
            return res.status(200).json(products)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async fyndBySlug(req: Request, res: Response): Promise<Response> {

        const { slug } = req.params

        try {

            const product = await ServiceProduct.fyndBySlug(slug)
            return res.status(200).json(product)

        } catch (err) {

            return res.status(400).json(err)

        }
    },

    async fyndByPriceRange(req: Request, res: Response): Promise<Response> {

        const priceRange = req.params.priceRange.split("-")
        const MinPrice = parseInt(priceRange[0])
        const MaxPrice = parseInt(priceRange[1])

        try {

            const products = await ServiceProduct.fyndByPriceRange(MinPrice, MaxPrice)
            return res.status(200).json(products)

        } catch (err) {

            return res.status(400).json(err)

        }
    },



    async updateProduct(req: Request, res: Response): Promise<Response> {


        const { id } = req.params;
        const bodyData = req.body

        try {

            const Updatedproduct = await ServiceProduct.updateProduct(id, bodyData)
            return res.status(200).json(Updatedproduct)

        } catch (err) {

            return res.status(400).json(err)

        }

    },

    async deleteProduct(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const deletedProduct = await ServiceProduct.deleteProduct(id)
            return res.status(200).json(deletedProduct)

        } catch (err) {

            return res.status(400).json(err)

        }

    }
}

export default ProductController