//Importing express module
const express = require('express')
// Handling request data
const bodyParser = require("body-parser");
//Creating an express module object
const app = express()

// create application/json parser
app.use(bodyParser.json());
app.use('/api/tasks', require('./api/tasks'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

//Establish the server connection with database
//PORT ENVIRONMENT VARIABLE
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node.js server is listening at http://localhost:${PORT}`);
});

app.timeout = 120000;