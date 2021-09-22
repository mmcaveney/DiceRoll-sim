let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

//1 selectors
let rollButton = document.getElementById("roll")
let resultDiv= document.getElementById("result")
let graphDiv = document.getElementById("graph")
let roll1000Btn = document.getElementById("roll1000")

//2 event listeners
rollButton.addEventListener("click", renderGraph)
roll1000Btn.addEventListener("click", roll1000Times)

//3 functions
function rollDie(){
   let roll= Math.floor(Math.random()*6 )+ 1;
    return roll;
    
}
function rollDice(){
    let a = rollDie();
    let b = rollDie();
    console.log (a + b)
return a + b;
}
function renderGraph(){
   //data/ variables
   graphDiv.innerHTML= ''
   graphDiv.classList.add('rollBox')
   let myRoll= rollDice();
   console.log(results);
 resultDiv.innerHTML= `You rolled a ${myRoll}!`
results[myRoll] += 1 ;       //update results array

for(let i = 2; i < results.length; i += 1){
let newDiv = document.createElement("div");
newDiv.innerHTML = `<p>You rolled a ${i}: ${results[i]} times</p>`
newDiv.classname = "newDiv_Style"
graphDiv.append(newDiv)//render/graphics
}
}
function roll1000Times(){
    for (let i = 1; i < 1000; i += 1){
        renderGraph();
        
    }
    
}
//flex display 