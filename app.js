const express = require ('express');
const app = express();
app.listen(3030 , () => console.log("Se inicializó el Servidor"));
app.get('/' , function (req , res) { 
    res.send("Ingerso al sitio")
});