const mongoose = require("../../database");

const ProdutoSchema = new mongoose.Schema({
    codigoCliente: {
        type: String,
        unique: true,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    pesoBruto: {
        type: Number,
        require: true,
    },
    pesoLiquido: {
        type: Number,
        require: true,
    },
    grupo: {
        type: String,
        require: true,
    },
    um:{
        type: String,
        require: true,
    }
}) ;

const Produto = mongoose.model("Produto", ProdutoSchema);
module.exports = Produto;