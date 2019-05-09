const mongoose = require('mongoose')

// criando o model de produto
const produtoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    },
    url: {
        type:String,
        required: true,
    },
    criadoEm:{
        type: Date,
        default: Date.now,
    },

})

mongoose.model('produto', produtoSchema)