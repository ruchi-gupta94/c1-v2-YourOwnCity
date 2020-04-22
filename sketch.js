var b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13;

function setup() {
  createCanvas(560, 400);
  
  
  b1=new Building();
  b1.position=1;
  b1.floors=10;
  b1.colour ="pink";
  
  b2=new Building();
  b2.position=2;
  b2.floors=23;
  b2.colour ="skyblue";
  
  b3=new Building();
  b3.position=3;
  b3.floors=29;
  b3.colour ="lavender";
  
  b4=new Building();
  b4.position=4;
  b4.floors=6;
  b4.colour ="yellow";
  
  b5=new Building();
  b5.position=5;
  b5.floors=16;
  b5.colour ="cyan";
  
  b6=new Building();
  b6.position=6;
  b6.floors=4;
  b6.colour ="lightyellow";
  
  b7=new Building();
  b7.position=7;
  b7.floors=20;
  b7.colour ="turquoise";
  
  b8=new Building();
  b8.position=8;
  b8.floors=12;
  b8.colour ="gold";
  
  b9=new Building();
  b9.position=9;
  b9.floors=19;
  b9.colour ="silver";
  
  b10=new Building();
  b10.position=10;
  b10.floors=27;
  b10.colour ="grey";
  
  b11=new Building();
  b11.position=11;
  b11.floors=30;
  b11.colour ="lightgreen";
  
  b12=new Building();
  b12.position=12;
  b12.floors=15;
  b12.colour ="white";
  
  b13=new Building();
  b13.position=13;
  b13.floors=23;
  b13.colour ="tan";

 
}

function draw() {
  background("lightblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display()
  b10.display();
  b11.display()
  b12.display();
  b13.display();
  
}