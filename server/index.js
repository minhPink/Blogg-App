const express = require('express');


const database = require("./config/database");

require('dotenv').config();

database.connect();

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})