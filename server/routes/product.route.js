module.exports = app => {
    const product = require("../controller/product.controller");
    const router = require("express").Router();

    router.get('/', product.findAll);
    router.post('/add', product.add);

    app.use('/api/product', router);
}