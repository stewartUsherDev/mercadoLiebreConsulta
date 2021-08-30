const express = require('express');
const app = express();

app.get (
    '/',
    (req, res)=>{
    res.send ("Hola mundo")
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto http://localhost:3000/ !');
});

