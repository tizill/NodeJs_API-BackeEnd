const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");
const SECRET = authConfig.SCREET;

// Função para verificar se o token do usuario esta ativado

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyJWT;
