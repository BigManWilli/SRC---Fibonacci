function setup(){
    createCanvas(800,800) 
}

function draw(){
    background(255)
    noFill()
    for(i=13; i >0; i--){ //et for-løkke som gentager sig selv 13 gange
        square(0,0,fibRekursion(i)*2); //tegner en firkant med den samme størrelse som Fibonaccis sekvens ud fra den rekursive funktion
        rotate(HALF_PI); //drejer tegningen 90 grader rundt
        translate(0,fibRekursion(i+1) * -2); //tegningen bliver flyttet opad i forhold til Fibonacci sekvens
      }
    }


function fibRekursion(n)
{
    if(n<=0) return 0
    else if (n==1) return 1
    else return fibRekursion(n-1)+fibRekursion(n-2)
}

console.time("rekursion")//starter en timer på den opkommende funktion og vil blive vist nede i console ved navnet "rekursion"
fibRekursion(20); //kører funktionen og beregner hvad det tyvende tal er i Fibonaccis sekvens
console.timeEnd("rekursion")//stopper timeren på den færdiggjorte funktion og viser, hvor lang tid det tog for funktionen at beregne det tyvende tal i Fibonacci sekvens
console.log(fibRekursion(10))


function fibIteration(n){
    var fib_a = 0
    var fib_b = 1
    var fib_c = 0
    //let Vals = [];
    //Vals.push(fib_a)
    for (let i = 0; i<n; i++){
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
console.log(fibIteration(10))
