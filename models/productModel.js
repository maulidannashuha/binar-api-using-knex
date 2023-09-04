const db = require("../db/db")

const getAllProduct = async () => {
    return await db.select('*').from('products')
}

const getProductById = async (id) => {
    return await db.select('*').from('products').where('id', id).first()
}

module.exports = {
    getAllProduct,
    getProductById
}