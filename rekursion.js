function factorial(n)
{
    if(n==0) return 1
    else return n*factorial(n-1)
}

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);
    for(let i = 0; i<20;i++)
{
    text(factorial(i), random(400), random(400))
    }
}