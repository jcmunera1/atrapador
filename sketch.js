let items = [];//red-free items
let collector = new Collector(400, 550);
 
function setup() {
  createCanvas(800, 600);
  for (let index = 0; index < 20; index++) {
    items.push(new Item());
  }
}
function draw() {
  background(220);
  collector.show();
  for (let index = 0; index < items.length; index++) {
    let current = items[index];
    current.show();
    current.move();
    if (collector.verifyContact(current)) {//true o false...
      collector.add(current);//agrego nuevo item al arreglo de Collector
      items.splice(index, 1)
      // arreglo de bolas rojas pierde ese item y lo manda 
      //al arreglo de las bolas verdes... en java era remove... js es splice...
      //index = posicion en la que quiero borrar, 1= cantidad de items que quiero
      //borrar
    }
  }
}
function mouseMoved() {
  collector.setX(mouseX);
}
