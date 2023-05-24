const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  const userList = [
    {
      id: 01,
      username: "minhaj01",
      email: "minhaj@test.com",
      password: "$2a$08$WMwNlb6PM3dBgdmWHhmdEucLjjglNJ4k3mBKr.jyp5eyiPQvIe53i"
    }
  ];

  const user = userList.find(user => user.username === req.body.username);

  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  var passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!"
    });
  }

  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: "20000" // 2 mint
  });

  res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    accessToken: token
  });
};
