var teclas = {UP: 38, DOWN:40, LEFT: 37,RIGHT:39};

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var movimiento=1;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);


function dibujarTeclado(evento){
  var colorcito = "blue";
  switch (evento.keyCode) {
    case teclas.DOWN:
      dibujarLinea("colorcito",x,y,x,y+movimiento,papel);
      y=y+movimiento;
      break;
      case teclas.UP:
      dibujarLinea("colorcito",x,y,x,y-movimiento,papel);
      y=y-movimiento;
      break;
      case teclas.RIGHT:
      dibujarLinea("colorcito",x,y,x+movimiento,y,papel);
      x=x+movimiento;
      break;
      case teclas.LEFT:
      dibujarLinea("colorcito",x,y,x-movimiento,y,papel);
      x=x-movimiento;
      break;
    default:
      console.log("otra tecla.")
    break;
  }
}

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
