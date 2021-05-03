const express = require('express');
const app = express();
const expressWss = require('express-ws')(app);
const appWS = expressWss.app;

//Configuracion
appWS.set('port', process.env.PORT || 3000 );
//middlewares
appWS.use(express.json());

//permisos/Access-Control-Allow-Origin
// 
appWS.use(function (req, res, next) {

    // URL a las que les daremos permisos
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Metodos a los que tendran permisos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//rutas
appWS.use(require('./rutas/usuarios'));
require('./video_procesador')(appWS);
appWS.use(require('./rutas/files'));



//iniciando el servidor
appWS.listen(app.get('port'), ()=>{
    console.log("El servidor esta en el puerto: ", app.get('port'));
});