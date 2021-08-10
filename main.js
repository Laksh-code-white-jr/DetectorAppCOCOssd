photo="";
status="";
things= [];

function setup(){
canvas = createCanvas(380,380);
canvas.center();
objectdetector = ml5.objectDetector('cocossd',modelLoaded);

video=createCapture(VIDEO);
video.hide();
}

function modelLoaded(){
    console.log("COCOssd Has Successfully Loaded");
    status = true;
}

function gotresult(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        things = results;
    }
    
}

function preload(){
}

function draw(){
image(video,0,0,380,380);
r=random(0,255);
g=random(0,255);
b=random(0,255);
if( status !=""){
    objectdetector.detect(video, gotresult)
for(var counter=0;counter<things.length;counter++){
document.getElementById("status").innerHTML="Status : Object Detected";
document.getElementById("num").innerHTML="Number Of Objects: "+things.length;
fill(r,g,b);
percent=floor(things[counter].confidence*100);
text(things[counter].label+" "+percent+"%",things[counter].x+15,things[counter].y+15);
noFill();
stroke(r,g,b);
rect(things[counter].x,things[counter].y,things[counter].width,things[counter].height);
}
}
}