class Ground {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:true

           
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = width;
  
    World.add(world,this.body);
}
display(){

    push();
    var pos = this.body.position;
   translate(pos.x,pos.y);
   imaageode(CENTER);
   rect(this.pos.x,this.pos.y,1000,50,this.width, this.height);
   fill("red");
   
   pop();
 }
}