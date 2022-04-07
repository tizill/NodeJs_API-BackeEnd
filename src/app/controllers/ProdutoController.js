const Produto = require("../models/produto");
const grupos = ["SPRI", "RITR", "MINE", "SOVE", "SUMI"];
const um = ["UN", "KG", "AP", "CX"];
class ProdutoController {
  async cadastrarProduto(req, res) {
    try {
      const produto = await Produto.create(req.body);

      return res.status(200).json({ produto });
    } catch (err) {
      return res.status(404).json({ error: "Registration failed" });
    }
  }

  async listarProdutos(req, res) {
    try {
      const produto = await Produto.find();

      res.status(200).json({ list: produto });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }

  async atualizarProduto(req, res) {
    const id = req.params.id;

    try {
      const updateProduto = await Produto.updateOne({ _id: id }, req.body);

      if (updateProduto.matchedCount === 0) {
        res.status(422).json({ message: "O produto não foi encontrado!" });
        return;
      }

      res.status(200).json({ updateProduto });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }

  async deletarPorduto(req, res) {
    const id = req.params.id;

    const produt = await Produto.findOne({ _id: id });

    if (!produt) {
      res.status(422).json({ message: "O produto não foi encontrado!" });
      return;
    }

    try {
      await Produto.deleteOne({ _id: id });

      res.status(200).json({ message: "Produto removido com sucesso !" });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }

  async getGrupos(req, res) {
    res.status(200).json({ list: grupos });
  }
  async getUnidadeMedida(req, res) {
    res.status(200).json({ list: um });
  }
}

module.exports = new ProdutoController();
