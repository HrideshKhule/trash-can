class Ground{
constructor(x,y,width,height){
    this.body=Matter.Bodies.rectangle(x,y,width,height,{isStatic:true})
    this.width=width
    this.height=height
    Matter.World.add(world,this.body)
}
display(){
fill ("yellow")
rect (this.body.position.x,this.body.position.y,this.width,this.height)

}



}