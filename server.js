const express = require('express') // importando o express
const mongoose = require('mongoose') // importando o ORM mongoogse 
const requireDir = require('require-dir')

const app = express() // chamando a função express para o server
app.use(express.json()) // habilitando a troca de dados JSON

mongoose.connect('mongodb://127.0.0.1:27017/admin', {useNewUrlParser: true}) // Iniciando o DB

requireDir('./src/models') // dando require para buscar nosso model e produto

//const produto = mongoose.model('produto')

// chamando as rotas
app.use("/api", require("./src/rotas")) 

app.listen(3000)// colocando para rodar em localhost:3000

