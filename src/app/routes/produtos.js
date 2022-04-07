const express = require("express");
const produtoController = require("../controllers/ProdutoController");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();
router.use(verifyJWT);
router.get("/", produtoController.listarProdutos);
router.post("/", produtoController.cadastrarProduto);
router.put("/:id", produtoController.atualizarProduto);
router.delete("/:id", produtoController.deletarPorduto);
router.get("/grupo", produtoController.getGrupos);
router.get("/um", produtoController.getUnidadeMedida);

module.exports = router;
