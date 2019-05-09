const express = require('express')
const rotas = express.Router()

const produtoController = require('./controllers/produtoController')

// rotas
rotas.get('/produtos', produtoController.index)
rotas.get('/produtos/:id', produtoController.indexId)
rotas.post('/produtos', produtoController.criar)
rotas.put('/produtos/:id', produtoController.atualiza)
rotas.delete('/produtos/:id', produtoController.deleta)

module.exports = rotas // exportando as rotas 