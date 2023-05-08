// ----------------------------------------------------
// requires
// ----------------------------------------------------
const express = require('express');
const formRoute = require('./routes/form'); // Change the import statement to use CommonJS syntax
const cors = require("cors")
const bodyParser = require('body-parser');
const morgan = require("morgan")
// ----------------------------------------------------
// importing
// ----------------------------------------------------
const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    Credential: true
}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"))


formRoute(app);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
