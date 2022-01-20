import asyncHandler from 'express-async-handler'


const getProducts = asyncHandler( async (req, res) => {

    const products = await Product.find({})
    res.json(products)

}) 
const getProductsById = () => {
    console.log('fourth');
}


export {
    getProducts,
    getProductsById
}