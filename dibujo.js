var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var colorSeleccionado = document.getElementById("colorcito")

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var color2 = colorSeleccionado.value;
  var lineas = parseInt(texto.value);
  var l=0;
  var l1=lineas;
  var yi,xf;
  var espacio = ancho/lineas;

  for(l=0;l<lineas;l++){
    l1--;
    yi=espacio*l;
    xf=espacio*(l+1);
    xi=espacio*l1;
    if(document.dibujoRecargado.ladoA.checked == true){
  dibujarLinea(color2,xi,0,0,xf);
    }
    if(document.dibujoRecargado.ladoB.checked == true){
  dibujarLinea(color2,300,yi,xf,0);;
    }
    if(document.dibujoRecargado.ladoC.checked == true){
  dibujarLinea(color2,0,yi,xf,300);
    }
    if(document.dibujoRecargado.ladoD.checked == true){
  dibujarLinea(color2,xi,300,300,xf);
    }
  console.log("linea: "+l)
  }
  //Dibujar bordes del cuadro//
  dibujarLinea(color2,1,1,1,300);
  dibujarLinea(color2,299,1,299,299);
  dibujarLinea(color2,1,1,300,1);
  dibujarLinea(color2,1,299,299,299);
  alertaChecked();
}
