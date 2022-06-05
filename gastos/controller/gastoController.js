const req = require('express/lib/request');
const res = require('express/lib/response');
let database = require('../data/database');

//const { v4: uuidv4 } = require('uuid')

const urlBase = '/gastos';

module.exports = (router) => {

    router.get(urlBase, (req, res) =>{
        res.json(database);
    });

    router.get(urlBase + '/:id', (req, res) =>{
        const id = req.params.id;
        const gasto = database.find(item => item.id == id);
        res.json(gasto);
    })

    router.post(urlBase, (req, res) => {
        const newGasto = {
            id: database.length + 1,
            nome: req.body.nome,
            data: req.body.data,
            valor: req.body.valor
        };

        database.push(newGasto);
        //res.status(200).send();
        res.json(newGasto);
    });

    router.put(urlBase + '/:id', (req, res) => {
        const id = req.params.id;
        const gasto = database.find(item => item.id === +id)

        gasto.nome = req.body.nome;
        gasto.data = req.body.data;
        gasto.valor = req.body.valor;

        res.json(gasto);

    })

    router.delete(urlBase + '/:id', (req, res) => {
        console.log(urlBase + req.params.id);
        const newList = database.filter(item => item.id != req.params.id);
        database = newList;
        res.status(200).send();
    })

};