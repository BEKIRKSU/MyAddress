const { Pool } = require('pg');

// Create a new pool instance using the database URL
const pool = new Pool({
  connectionString: 'postgres://recoyeio:KCTTWaiIIsQkSG3O9AdZC2oKZTYe4aRW@rogue.db.elephantsql.com/recoyeio',
  ssl: {
    rejectUnauthorized: false
  }
});

// Test the connection to the database
pool.query('SELECT NOW()')
  .then(res => console.log('Database connected! Current time: ', res.rows[0].now))
  .catch(err => console.error('Database connection error: ', err.stack));

// Export the pool object for use in other modules
module.exports = pool;
