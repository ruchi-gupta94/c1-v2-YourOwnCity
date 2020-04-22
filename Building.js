class Building{
  constructor()
  {
    this.height=0;
    this.position=0;    
    this.yPosition=0;
    this.width=20;
    this.floors=0;
    this.colour ="red";
    
  }  
  display()
  {
   this.height=this.floors*10;
   this.yPosition=400-(this.height);
   this.xPosition=this.position*38;
    fill(this.colour);
   rect(this.xPosition,this.yPosition, this.width, this.height); 
  }  
  
}
