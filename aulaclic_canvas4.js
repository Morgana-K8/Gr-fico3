function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContexto('2d');

    contexto.beginPath();
    contexto.moveTo(125,25);
    contexto.lineTo(75,25);
    contexto.quadraticCurveTo(25,25,25,75);
    contexto.lineTo(25,75);
    contexto.lineTo(25,125);
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(350,25);
    contexto.lineTo(300,25);
    contexto.quadraticCurveTo(265,35,250,75);
    contexto.lineTo(250,125);
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(125,200);
    contexto.lineTo(75,200);
    contexto.bezierCurveTo(35,185,10,210,25,250);
    contexto.lineTo(25,300);
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(300,200);
    contexto.bezierCurveTo(260,200,200,220,260,250);
    contexto.bezierCurveTo(325,275,350,300,300,300);
    contexto.stroke();
}