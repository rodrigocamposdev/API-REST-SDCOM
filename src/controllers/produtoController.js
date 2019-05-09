const mongoose = require('mongoose') // importando o mongoose

const produto = mongoose.model('produto') // instanciando o model de produto

module.exports = {
    
    //rota de listagem de produtos
    async index(req, res){
        const produtos = await produto.find()
        return res.json(produtos) // retornando um JSON para os clientes
    },

    //rota de add produto
    async criar(req, res){
        const produtos = await produto.create(req.body)
        return res.json(produtos)
    },
    
    //rota de listar um produto
    async indexId(req, res){
        const produtos = await produto.findById(req.params.id)

        return res.json(produtos)
    },

    //rota para atualização de livros
    async atualiza(req, res){
        const produtos = await produto.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true})// {new: true} serve para atualizar o valor da variável produtos

        return res.json(produtos)
    },

    //rota para deletar livros
    async deleta(req, res){
        await produto.findByIdAndRemove(req.params.id) //sem pegar produto, sem retorno

        return res.send('sucesssso')
    }


}

