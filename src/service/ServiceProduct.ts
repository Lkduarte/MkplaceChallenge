import RepositoryProduct from '../Repository/RepositoryProduct';
import mongoose from 'mongoose';

class ProductService {

    createProduct(product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }) {
        return RepositoryProduct.create(product)
    }

    listAllProducts() {
        return RepositoryProduct.find()
    }

    findById(id: string) {
        return RepositoryProduct.findById(id)
    }

    fyndByName(name: string) {
        return RepositoryProduct.find({ "name": new RegExp(name, 'i') })
    }

    fyndByBrand(brand: string) {
        return RepositoryProduct.find({ "brand": new RegExp(brand, 'i') })
    }

    fyndBySeller(seller: string) {
        return RepositoryProduct.find({ "seller": seller })
    }

    fyndBySlug(slug: string) {
        return RepositoryProduct.find({ "slug": slug })
    }

    fyndBySellerId(seller_id: string) {
        return RepositoryProduct.find({ "seller": seller_id })
    }

    fyndByPriceRange(MinPrice: number, MaxPrice: number) {
        return RepositoryProduct.find({ "price": { $gte: MinPrice || 0, $lte: MaxPrice || 1000000000 } })
    }

    updateProduct(id: string, product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }) {
        return RepositoryProduct.findByIdAndUpdate(id, product)
    }

    deleteProduct(id: string) {
        return RepositoryProduct.findByIdAndDelete(id)
    }
}

export default new ProductService();