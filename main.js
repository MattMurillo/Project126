function setup()
{
    video = createCapture(VIDEO);
    video.size(500,400);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    background('#353935');
    textSize(600)
    fill('')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);    
    }
}

