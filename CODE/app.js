// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();
//console.log("esta es la funcion",app)
// Requiere path
const path = require('path');

// Usando recursos estáticos.
app.use(express.static('public'));

// Levantando el Servidor en el puerto 3030
app.listen(3000, () => console.log('Server running in 3000 port'));

/*
    ** RUTAS A LOS RECURSOS **
*/

// Ruta Raíz / ➝ Home

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./views/home.html'));
});
