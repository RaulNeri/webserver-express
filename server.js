const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

//Configurar puerto para Heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'raul'
    });

});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/', function(req, res) {
//     // res.send('Hola Mundo');
//     let salida = {
//         nombre: 'raul',
//         edad: 24,
//         url: req.url
//     };
//     res.send(salida);
// });

// app.get('/data', function(req, res) {
//     res.send('Hola Data');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})