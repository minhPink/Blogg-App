const express = require('express');

const userRoutes = require("./routes/user.route");
const authRotes = require("./routes/auth.route");

const database = require("./config/database");

require('dotenv').config();

database.connect();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use("/api/user", userRoutes);
app.use("/api/auth", authRotes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})