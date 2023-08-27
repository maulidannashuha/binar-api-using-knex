const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development)

async function runQuery() {
    try {
      // Insert operation
      await db('products').insert({
        name: '111',
        stock: 300
      });
  
      console.log('Row inserted successfully.');
  
      // Select operation
      const data = await db.select('*').from('products');
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Close the database connection
      db.destroy();
    }
}

runQuery();