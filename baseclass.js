class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
  
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
}