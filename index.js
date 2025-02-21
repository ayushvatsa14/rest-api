const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8000;

const bfhlRoutes = require('./routes/Route');
app.use('/bfhl', bfhlRoutes);

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});