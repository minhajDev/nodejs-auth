const axios = require("axios");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};


exports.getUsers = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      const users = response.data;
      res.status(200).send({ users });
    })
    .catch(error => {
      console.error("Error retrieving users:", error);
      res.status(500).send({ message: "Error retrieving users" });
    });
};
