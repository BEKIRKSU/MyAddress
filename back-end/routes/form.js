const db = require("../db/db");

function formRoute(app){
  app.post('/mycode', (req, res) => {
    const formData = req.body;
    const { name, streetAddress, postalCode, city, country } = formData;
  
    // Convert the fields to hex codes
    const nameHex = Buffer.from(name, 'utf-8').toString('hex');
    const streetAddressHex = Buffer.from(streetAddress, 'utf-8').toString('hex');
    const postalCodeHex = Buffer.from(postalCode, 'utf-8').toString('hex');
    const cityHex = Buffer.from(city, 'utf-8').toString('hex');
    const countryHex = Buffer.from(country, 'utf-8').toString('hex');
  
    const queryString = `
      INSERT INTO form_data (name, street_address, postal_code, city, country, mycode)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
  
    const values = [
      name,
      streetAddress,
      postalCode,
      city,
      country,
      nameHex + streetAddressHex + postalCodeHex + cityHex + countryHex
    ];
  
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
