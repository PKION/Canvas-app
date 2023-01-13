noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    function modelLoaded(){
        console.log('Posenet is initialized!');
        poseNet.on('pose', gotPoses);
    }
}

function draw(){
    background('#2ed9d6');
    fill("#87CEEB");
    stroke("#0000FF");
    square(noseX, noseY, difference);
    document.getElementById("square_sides").innerHTML="The side of the sqaure = "+floor(difference)+ " pixels"; 
}

function gotPoses(results){
if(results.length>0){
console.log(results);

noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference= leftWristX-rightWristX;
}
}