import { Schema } from 'mongoose'

const SellerModel = new Schema({
    
  name: String,
  sector: String,
},
{
  timestamps: true
})

export default SellerModel