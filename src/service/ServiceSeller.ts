import RepositorySeller from '../Repository/RepositorySeller';
import mongoose from 'mongoose';

class ServiceSeller {

    createSeller(seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' }) {
        return RepositorySeller.create(seller)
    }

    listAllSellers() {
        return RepositorySeller.find()
    }
    listAllSellersBySector(sector: string) {
        return RepositorySeller.find({ "sector": new RegExp(sector, 'i') })
    }

    findById(id: string) {
        return RepositorySeller.findById(id)
    }

    fyndByName(name: string) {
        return RepositorySeller.find({ "name": new RegExp(name, 'i') })
    }

    updateSeller(id: string, seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' }) {
        return RepositorySeller.findByIdAndUpdate(id, seller)
    }

    deleteSeller(id: string) {
        return RepositorySeller.findByIdAndDelete(id)
    }

}

export default new ServiceSeller();