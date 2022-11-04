import { Schema } from 'mongoose'

const ProductModel = new Schema({
    
  name: String,
  brand: String,
  slug: String,
  price: Number,
  quantity: Number,
  seller: String,
  image: String
},
{
  timestamps: true
})

export default ProductModel