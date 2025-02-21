const express=require('express');
const app=express();
require('dotenv').config();

app.use(express.json());
const Port=process.env.Port || 8000;

const bfhlRoutes = require('./routes/Route');
app.use('/bfhl', bfhlRoutes);

app.listen(Port, () => {
    console.log(`Server is started at port ${Port}`);
});

app.get('/', (req, res) => {
    res.send(`<h1>This is homepage</h1>`);
})