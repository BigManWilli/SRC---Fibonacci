

function setup(){
    createCanvas(500,500)
}

function draw(){
    background(255)
    noFill()
    
    translate(width/2, height/2)
    for(let i = 1; i <= 100; i++){
        rect(0,0,i*10,i*10);
    }
}
    
function fibRekursion(n)
{
    if(n<=0) return 0
    else if (n==1) return 1
    else return fibRekursion(n-1)+fibRekursion(n-2)
}
console.time("rekursion")
fibRekursion(20);
console.timeEnd("rekursion")


function fibIteration(){
    var fib_a = 0
    var fib_b = 1
    var fib_c = 0
    //let Vals = [];
    //Vals.push(fib_a)
    for (let i = 0; i <=10; i++){
        fib_c = fib_a + fib_b
        fib_b = fib_a
        fib_a = fib_c
        //Vals.push(fib_a)
    }
    return fib_a //return Vals for fibonacci talfølger fra 1-10, return fib_a 
}

console.time("iteration")
fibIteration(20)
console.timeEnd("iteration")
console.log(fibIteration())
