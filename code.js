function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(500, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("#f0ad4e");
}

function modelLoaded() {
    console.log("PoseNet is Intialized!");
}

function gotPoses() {
    if (results.length > 0) {
        console.log(results);
    }
}