class Retangulo {
    constructor(corLinha, corPreenchimento, espessuraLinha, x, y, largura, altura){
        this.corLinha = corLinha;
        this.corPreenchimento = corPreenchimento;
        this.espessuraLinha = espessuraLinha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    draw(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessuraLinha;
        contexto.fillStyle = this.corPreenchimento;
        contexto.strokeStyle = this.corLinha;
        contexto.fillRect(this.x, this.y, this.largura, this.altura);
        contexto.strokeRect(this.x, this.y, this.largura, this.altura);
        contexto.closePath();
    }
}

let canvas = document.getElementById('canvas');
let ctx1 = canvas.getContext('2d');

let retangulo = new Retangulo('blue', 'black', 2, 150, 150, 20, 20);

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    ctx1.clearRect(0,0,400,400);
    retangulo.draw(ctx1);
    retangulo.x = x_mouse;
    retangulo.y = y_mouse;

    if (retangulo.x > 300){retangulo.x = 280}
    if (retangulo.y > 300){retangulo.y = 280}
    if (retangulo.x < 0){retangulo.x = 0}
    if (retangulo.y < 0){retangulo.y = 0}
})