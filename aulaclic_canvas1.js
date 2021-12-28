function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    contexto.fillStyle = '#cccccc';
    contexto.fillRect(0, 0, 450, 500);
    contexto.fillStyle = '#006ccc';
    contexto.fillRect (100,150,250,150)
}