const db = require("../db/db");

function formRoute(app){
  app.post('/mycode', (req, res) => {
    const formData = req.body;
    const { name, streetAddress, postalCode, city, country } = formData;
    //change database name addresses
    const queryString = `
      INSERT INTO form_data (name, street_address, postal_code, city, country)
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

//---------------------------------------------------


//---------------------------------------------------


app.get('/mycode', (req, res) => {
  const queryString = `
    SELECT * FROM form_data
  `;

  console.log("Executing query:", queryString);

  db.query(queryString)
    .then((result) => {
      console.log("Query result:", result.rows);
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.error("Query error:", err);
      res.status(500).send("Failed to retrieve data from the database.");
    });
});

  
}

module.exports = formRoute;
