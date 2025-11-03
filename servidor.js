require("colors");
var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

const PORT = 3000; 


app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, 'views'));


const subpastas = [
    'animation',
    'canvas',
    'copiando_modelo',
    'guess',
    'site_apple',
    'sobre_mim' 
];


app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public', 'sobre_mim', 'projects.html'));
});


app.get('/cadastra', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public', 'sobre_mim', 'Cadastro.html'));
});


app.get('/login', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public', 'sobre_mim', 'Login.html'));
});


app.get('/status-login', (req, res) => {
    
    const status = "Sucesso (Status simulado via GET)"; 
    
    res.render('resposta', { loginStatus: status }); 
});



subpastas.forEach(pasta => {
    app.use(`/${pasta}`, express.static(path.join(__dirname, 'public', pasta)));
});


app.use(express.static(path.join(__dirname, 'public')));


// Cria o servidor
var server = http.createServer(app);

// Inicia o servidor
server.listen(PORT, () => {
    console.log("servidor rodando...".rainbow);
    
    console.log(`\nÍNDICE DO PORTFÓLIO (REQUISITO 3.b): http://localhost/`); 
    console.log(`PÁGINA DE CADASTRO (REQUISITO 3.c): http://localhost/cadastra`); 
    console.log(`PÁGINA DE LOGIN (REQUISITO 3.d): http://localhost/login`); 
    console.log(`PÁGINA EJS (REQUISITO 4.a): http://localhost/status-login`); 
    
    console.log("\nRotas mapeadas para projetos:".bold.yellow);
    subpastas.forEach(pasta => {
        console.log(`   > http://localhost/${pasta}/`);
    });
});