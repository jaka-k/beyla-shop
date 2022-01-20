import mongoose  from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import Product from "./models/productModel.js";
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // This seeder was used only initially for connecting the schema to the db
        // The delete functions can be very dangerous if triggered by mistake, therefore they are commented out!
        // await Product.deleteMany()

        await Product.insertMany(products)

        console.log('Data Imported!'.green.inverse)
        process.exit();

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const deleteData = async () => {
    try {
        // await Product.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit();

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    deleteData()
} else {
    importData()
}

