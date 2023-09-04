const db = require("../db/db");
const productModel = require("../models/productModel");

module.exports = {
    index: (req, res) => {
        try {
            // Select operation
            const data = productModel.getAllProduct();
    
            res.json({
                status: 200,
                data: data
            })
        } catch (error) {
            res.json({
                status : 500,
                message: error.message
            });
        }
    },
    show: async (req, res) => {
        try {
            const id = req.params.id

            // Select operation
            const data = productModel.getProductById(id);
    
            if(!data){
                res.json({ status: 404, message: 'Product not found' });
            }
    
            res.json({
                status: 200,
                data: data
            })
        } catch (error) {
            res.json({
                status : 500,
                message: error.message
            });
        }
    },
    create: async (req, res) => {
        try{
            const {name, stock} = req.body
    
            await db('products').insert({
                name: name,
                stock: stock
            })
    
            res.status(201).json({status: 201, message: 'product successfully added'})
        } catch (error) {
            res.json({
                status : 500,
                message: error.message
            });
        }
    },
    update: async (req, res) => {
        try{
            const {name, stock} = req.body
    
            await db('products').where('id', req.params.id).update({
                name: name,
                stock: stock
            })
    
            res.status(201).json({status: 201, message: 'product successfully updated'})
        } catch (error) {
            res.json({
                status : 500,
                message: error.message
            });
        }
    },
    delete: async (req, res) => {
        try{
            const id = await db('products').where('id', req.params.id).delete().returning('id')
    
            res.status(201).json({status: 201, message: 'product successfully deleted'})
        } catch (error) {
            res.json({
                status : 500,
                message: error.message
            });
        }
    }
}