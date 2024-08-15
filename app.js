const express = require('express');
const cors = require('cors');

const app = express();

const productsRouter = require('./app/routes/product.route');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Running server!" });
});

app.use('/api/products', productsRouter);

module.exports = app;