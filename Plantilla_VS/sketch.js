//Declarar variables con objetos
var box;
//Funcion de configuracion
function setup() {
  //Diseño de area de juego
  createCanvas(400,400);
  //Diseñoi de objeto 
 box=createSprite(150,150,45,45);
}

//Funcion de dibujo
function draw() 
{
  //Establecer color de fondo
  background(51);
  if(keyDown("w")){ 
    box.position.y=box.position.y-5;
    background("pink");
  }
//Codigo para proyectar objetos
drawSprites();
}

