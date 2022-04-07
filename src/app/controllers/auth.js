const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");
const SECRET = authConfig.SCREET;

class Auth {
  async login(req, res) {
    const { user, password } = req.body;

    if (user == "001196" && password == "123456") {
      const token = jwt.sign({ userId: 1 }, SECRET, {
        expiresIn: 3600,
      });

      return res.json({
        auth: true,
        token,
        scope: "default",
        token_type: "Bearer",
        expiresIn: 3600,
      });
    }

    return res.status(401).send("Auth Failed").end();
  }
}

module.exports = new Auth();
