const db = require('../models');
const Product = db.products;
const OP = db.Sequelize.Op;

exports.create = (req, res) => { }

exports.findAll = (req, res) => {
    Product.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Some error occured." }))
}

exports.add = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Some error occured."}))
}