const express = require('express');
const cors = require('cors');

// import connection from './app/config/connection';

const app = express();

const productsRouter = require('./app/routes/product.route');

app.use(cors());
app.use(express.json());

// .connection();

app.get("/", (req, res) => {
    res.json({ message: "Running server!" });
});

app.use('/products', productsRouter);

module.exports = app;