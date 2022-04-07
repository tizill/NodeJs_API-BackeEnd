const express = require("express");
const app = express();
const login = require("./app/routes/login");
const produto = require("./app/routes/produtos");

app.use(express.json());

app.use("/login", login);
app.use("/produto", produto);

app.listen(5000, () => {
  console.log("Rodando na porta 5000 !");
});
