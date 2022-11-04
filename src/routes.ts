import { Router } from 'express'
import ProductController from './Controllers/ProductController'
import SellerController from './Controllers/SellerController'

const router = Router()

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

router.get('/', (req, res) => {
    res.send(`RESTFUL API FOR MKPLACE CHALLENGE WITH NODE.JS TYPESCRIPT AND MONGODB.
              IF YOU NEED HELP WITH REQUESTS, PLEASE VISIT THE DOCUMENTION ON GITHUB.`)
})

//Product Routes
router.post('/product', ProductController.createProduct)
router.get('/products', ProductController.listAllProducts)
router.get('/productById/:id', ProductController.findById)
router.get('/productsByName/:name', ProductController.fyndByName)
router.get('/productsByBrand/:brand', ProductController.fyndByBrand)
router.get('/productsBySeller/:seller_id', ProductController.fyndBySellerId)
router.get('/product/:slug', ProductController.fyndBySlug)
router.get('/productsByPriceRange/:priceRange', ProductController.fyndByPriceRange)
router.put('/product/:id', ProductController.updateProduct)
router.delete('/product/:id', ProductController.deleteProduct)

//Seller Routes
router.post('/seller', SellerController.createSeller)
router.get('/sellers', SellerController.listAllSellers)
router.get('/seller/:id', SellerController.findById)
router.get('/sellersBySector/:sector', SellerController.listAllSellersBySector)
router.get('/sellersByName/:name', SellerController.fyndByName)
router.put('/seller/:id', SellerController.updateSeller)
router.delete('/seller/:id', SellerController.deleteSeller)

export default router