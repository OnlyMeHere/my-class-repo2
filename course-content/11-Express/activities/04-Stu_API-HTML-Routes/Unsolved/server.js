// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file

const terms = require('./terms.json');

const PORT = 3001;

// TODO: Initialize app variable

const app = express();

// TODO: Create a route for a GET request that will return the content of our `termData.json` file
app.get("/api/terms", (req, res)=> {
  res.send(json(terms);
})
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
