const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET dentro da rota produtos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota produtos'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if(id === 'blz') {
        res.status(200).send ({
            mensagem: 'Id especial encontrado',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
});

module.exports = router;