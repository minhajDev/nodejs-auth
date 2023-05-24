const express = require('express')
const cors = require('cors')

const app = express()

var corsOption = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsOption))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Minhaj application." });
  });

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});