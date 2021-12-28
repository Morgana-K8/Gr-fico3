function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');

    contexto.beginPath();
    contexto.moveTo(50,50);
    contexto.lineTo(50,150);
    contexto.lineTo(150,150);
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(200,50);
    contexto.lineTo(200,150);
    contexto.lineTo(300,150);
    contexto.fill();

    contexto.beginPath();
    contexto.moveTo(50,200);
    contexto.lineTo(50,300);
    contexto.lineTo(150,300);
    contexto.closePath();
    contexto.stroke();

}