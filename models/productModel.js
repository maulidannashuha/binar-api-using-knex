const db = require("../db/db")

module.exports = {
    getAllProduct: async () => {
        return await db.select('*').from('products')
    },
    getProductById: async (id) => {
        return await db.select('*').from('products').where('id', id).first()
    }
}