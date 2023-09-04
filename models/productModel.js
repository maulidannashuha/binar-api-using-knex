const db = require("../db/db")

module.exports = {
    getAllProduct: async () => {
        return await db.select('*').from('products')
    }
}