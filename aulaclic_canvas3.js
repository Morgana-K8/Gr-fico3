function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');

    contexto.beginPath();
    contexto.arc(60,60,50,0,0.5*Math.PI);

    contexto.stroke();

    contexto.beginPath();
    contexto.arc(200,60,50,radianes('0'),radianes('90'),true);
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(350,60,50,radianes('0'),radianes('360'));
    contexto.stroke();
}
function radianes(grados) {
    var radianes = (Math.PI/180)*grados;
    return radianes;
}