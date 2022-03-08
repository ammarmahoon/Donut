
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
app.use(express.json());

require ("./routes/welcome.route")(app);
require ("./routes/login.route")(app);
module.exports = app