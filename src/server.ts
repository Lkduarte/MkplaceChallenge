import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATA_BASE}.cgzj91l.mongodb.net/?retryWrites=true&w=majority`
)
    .then((data) => {
        console.log('MongoDB Connection Succeeded', data.version);
    })

    .catch((err) => {
        console.log('Error in DB connection:', err.message);
    })

app.listen(process.env.PORT,()=> console.log(`Server running in http://localhost:${process.env.PORT}`))