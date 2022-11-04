import mongoose from 'mongoose'
import ProductModel from '../Models/Product'

export default mongoose.model("Product", ProductModel);