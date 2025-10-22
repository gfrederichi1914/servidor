require("colors");
var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
const PORT = 3000;

// Mudamos o caminho para buscar o arquivo projects.html dentro de public/sobre_mim
app.get('/', (req, res) => {
    // path.join(__dirname, 'public', 'sobre_mim', 'projects.html')
    // Monta o caminho completo para o seu arquivo de índice na subpasta
    res.sendFile(path.join(__dirname, 'public', 'sobre_mim', 'projects.html'));
});

const subpastas = [
    'animation',
    'canvas',
    'copiando_modelo',
    'guess',
    'site_apple',
    'sobre_mim' 
];

// Loop para mapear dinamicamente cada pasta para a sua respectiva rota
subpastas.forEach(pasta => {
    // Exemplo: app.use('/animation', express.static(path.join(__dirname, 'public', 'animation')));
    app.use(`/${pasta}`, express.static(path.join(__dirname, 'public', pasta)));
});

// Serve o restante dos arquivos em 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Cria o servidor
var server = http.createServer(app);

// Inicia o servidor
server.listen(PORT, () => {
    console.log("servidor rodando...".rainbow);
    console.log(`\nÍNDICE DO PORTFÓLIO (Comece aqui!): http://localhost:${PORT}/`);
    console.log("\nRotas mapeadas para projetos:".bold.yellow);
    
    subpastas.forEach(pasta => {
        console.log(`   > ${pasta}: http://localhost:${PORT}/${pasta}/`);
    });
});