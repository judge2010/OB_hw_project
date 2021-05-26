var status="";
var length;
object=[];
function preload(){
img=loadImage("Bottles.JPG")
};
function setup(){
    Canvas=createCanvas(600 ,400);
    Canvas.position(500 ,200);
    ObjectDetector=ml5.objectDetector("cocoSsd",modelLoaded);
    document.getElementById("status").innerHTML= "Status - Detecting Object";
};
function draw(){
 image(img ,0 ,0 ,600 ,400);
 if(status!=""){
     for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML= "Status - Object Detected";
        document.getElementById("number_objects").innerHTML="There are 3 bottles in the image and cocossd model has detected "+length +" images.";
        fill(255,0,0);
        percentage=floor(object[i].confidence*100);
        textSize(25);
        text(object[i].label+" "+percentage+"%",object[i].x+70,object[i].y+100);
        noFill();
        stroke(255,0,0);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
     };
 };
};
function modelLoaded(){
console.log("model is loaded"); 
status=true;
ObjectDetector.detect(img,gotResult);
};
function gotResult(error,results){
    if(error){
        console.log(error);
            }
    else{
                console.log(results);
                object=results;
                length=results.length;
            };        
};
function back(){
window.location="index.html";
};