class Paper {
    constructor(x,y,radius){
        var options={
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        this.image=loadImage("paper.png")

        World .add(world,this.body)
    }
    display(){
        imageMode(RADIUS)
        //circle(this.body.position.x,this.body.position.y,this.radius)
      image(this.image,this.body.position.x,this.body.position.y,33,33)
    }
}