const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/indexRouter');

// Configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Middlewares
app.use((req,res,next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});
app.use(bodyParser.json());

// Rutas
app.use(routes);

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')));

// Iniciar servidor
app.listen(app.get('port'), () => console.log('server on port ',app.get('port')));