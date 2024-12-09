const express = require('express');

const userRoutes = require("./routes/user.route");

const database = require("./config/database");

require('dotenv').config();

database.connect();

const app = express();

const port = process.env.PORT;

app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})