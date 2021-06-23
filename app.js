const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('hello from node');
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

