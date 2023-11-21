// Entrada al servidor

const express = require('express');  
const app = express();  

require('dotenv').config(); 
const PORT = process.env.PORT || 5000;
const cors  = require('cors');
const routes = require('./routes');

// Middlewares
app.use(express.json()); // me va a permitir leer las peticiones
app.use(cors()); // permite la entrada por diferentes rutas
app.use(express.static('images')) // para usar las imágenes de los usuarios

app.use(routes);

app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});


app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});

app.listen(PORT, () => { 
    console.log(`Escuchando el puerto ${PORT}`);
}); 