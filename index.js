const express  = require('express')
const productController = require('./controllers/productController')
const app = express()
const db = require('./db/db')

app.use(express.json())

const router = require('./routers/router')
app.use(router)

app.listen(4000, () => {
    console.log('listening on port 4000');
})