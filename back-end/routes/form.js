const db = require("../db/db");
const { createHash } = require('crypto');



function formRoute(app) {
  app.post('/mycode', (req, res) => {
    const formData = req.body;
    const { name, streetAddress, postalCode, city, country } = formData;
  
    // Hash and truncate the form data fields to 7 characters
    const fullAddress = streetAddress + postalCode + city + country;
    const fullDetails = createHash('sha256').update(name + fullAddress).digest('hex').slice(0, 11).toUpperCase();
  
    // Combine the hashed values into a single code
    const mycode = `${fullDetails}`;
  
    const queryString = `
      INSERT INTO form_data (name, street_address, postal_code, city, country, mycode)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
  
    const values = [name, streetAddress, postalCode, city, country, mycode];
  
    db.query(queryString, values)
      .then(() => {
        res.redirect('/thank-you'); // Redirect to the thank you page
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Failed to save data.");
      });
  });


  app.get('/thank-you', (req, res) => {
    const queryString = `SELECT mycode FROM form_data ORDER BY id DESC LIMIT 1`;
  
    db.query(queryString)
      .then((result) => {
        if (result.rows.length === 0) {
          res.send('No data found');
          return;
        }
  
        const myCode = result.rows[0].mycode;
  
        const responseHtml = `
          <html>
            <body>
              <h1>Thank you!</h1>
              <p>Your code: ${myCode}</p>
            </body>
          </html>
        `;
  
        res.send(responseHtml);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Failed to retrieve data.");
      });
  });
}  

module.exports = formRoute;
