//Create variables here
var dog, happyDog, database, foodS, foodStock, database, feeed, addFood, fedTime, lastFed, foodObj

var bottle1
function preload()
{
	//load images here
 img1 = loadImage('../images/dogImg.png');
 img2 = loadImage('../images/dogImg1.png');

}

function setup() {
  database = firebase.database();
	createCanvas(600, 500);
 
  dog = createSprite(300,250,20,20);
  dog.addImage(img1);
  dog.scale = 0.2;
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
  feeed=createButton("Feed The Dog");
  feeed.position(700,95);
  feeed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  lastFed = hour();
  

  

}


function draw() {  
 




background(46, 139, 87);

  drawSprites();
  //add styles here
  textSize(15);
  fill(255,255,254);
 if(lastFed>=12){
  text("Last Fed : "+ lastFed%12 + " PM", 350,30);
 } else if(lastFed==0){
  text("Last Fed : 12 AM", 350,30);
 }else{
  text("Last Fed : " + lastFed + " AM", 350, 30);
 }
 text("Food : "+foodS ,100,100);
}


function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}


  database.ref('/').update({

Food:x    
  })
}

function fixStock(x){
  if(x<=0){
    x=20;
  }else{
    x=20;
  }
  
  
    database.ref('/').update({
  
  Food:x    
    })
  }

  function feedDog(){
dog.addImage(img2);
foodS--;
database.ref('/').update({
  Food:foodS
})

database.ref('/').update({

FeedTime:hour()
}) }

function addFoods(){
  dog.addImage(img1);
foodS++;
database.ref('/').update({
  Food:foodS
})
bottle1 = new Food();
bottle1.display();
}

