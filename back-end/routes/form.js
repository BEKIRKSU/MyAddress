const db = require("../db/db");

function formRoute(app){
  app.post('/saveData', (req, res) => {
    const formData = req.body;
    const { name, streetAddress, postalCode, city, country } = formData;

    const queryString = `
      INSERT INTO addresses (name, street_address, postal_code, city, country)
      VALUES ($1, $2, $3, $4, $5)
    `;

    const values = [name, streetAddress, postalCode, city, country];

    db.query(queryString, values)
      .then(() => {
        res.status(200).send("Data saved successfully!");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Failed to save data.");
      });
  });

  app.get('/mycode', (req, res) => {
    const queryString = `
      SELECT * FROM addresses
    `;

    db.query(queryString)
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Failed to retrieve data.");
      });
  });
}

module.exports = formRoute;
