var cuadro = document.getElementById("canvas");
var lienzo = cuadro.getContext("2d");
var boton= document.getElementById("botoncito");
var x,y=0;
var estado;

boton.addEventListener("click",anchoPapel);
cuadro.addEventListener("mousedown",presiona);
cuadro.addEventListener("mousemove",mueve);

function presiona(evento){
   estado = 1;
   x=evento.offsetX;
   y=evento.offsetY;
   console.log(evento)
   console.log(x,y,estado)
}

function mueve(mueve){
  if(estado==1){
    dibujarLinea("red",x,y,mueve.offsetX,mueve.offsetY,cuadro);
  }else{
    x=mueve.offsetX;
    y=mueve.offsetY;
  }
  console.log(mueve)
}




function anchoPapel(){
  var tamaño=parseInt(document.getElementById("ancho").value);
    cuadro.width=tamaño;
    cuadro.height=tamaño;
    console.log(tamaño);
    console.log(cuadro);
    //Este es el marco del lienzo
    dibujarLinea("black",1,1,1,tamaño,cuadro);
    dibujarLinea("black",tamaño-1,1,tamaño-1,tamaño-1,cuadro);
    dibujarLinea("black",1,1,tamaño,1,cuadro);
    dibujarLinea("black",1,tamaño-1,tamaño-1,tamaño-1,cuadro);
    dibujarLinea("red",(tamaño/2)-1,(tamaño/2),(tamaño/2)+1,(tamaño/2)+1,cuadro);
}


function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal, cuadro){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
