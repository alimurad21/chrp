import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
dotenv.config() // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

console.log(`MongoDB URI: ${process.env.MONGODB_URI}`); // Log the MongoDB URI for debugging
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin@mernshop.zgxa1.mongodb.net');

app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
