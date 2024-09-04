const express = require('express');
const cors = require('cors');

const app = express();

const productsRouter = require('./app/routes/product.route');
const usersRouter = require('./app/routes/users.route');

app.use(cors());
app.use(express.json());

// .connection();

app.get("/", (req, res) => {
    res.json({ message: "Running server!" });
});

app.use('/products', productsRouter);
app.use('/users', usersRouter);

module.exports = app;