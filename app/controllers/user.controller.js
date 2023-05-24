exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

const http = require('http');

exports.userBoard = (req, res) => {
  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users',
    method: 'GET'
  };

  const request = http.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const users = JSON.parse(data);
      res.status(200).send({ users });
    });
  });

  request.on('error', (error) => {
    console.error('Error retrieving users:', error);
    res.status(500).send({ message: 'Error retrieving users' });
  });

  request.end();
};

