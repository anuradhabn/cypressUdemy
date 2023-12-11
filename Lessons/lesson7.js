//Loops -- needed for repeting an action
//For Loop ( for i loop)
// for(statement1; statement2 ; statement3) {
//     code
// }
// statement1 : what are starting the loop with
// statement2 : how long are we doing to run the loop
// statement3 : increment/decrement/change or what we need to do after each cycle of the loop

// for of loop
var cars = ["Audi","Benz","Tesla"]
console.log("for of Loop Output")
for(let car of cars){ 
//^^ car or x is a variable which is an iterator which will hold the value of the array
// during the execution of the loop    
    console.log(car)
    if(car == "Benz") { break }
}

//example with ES6 Syntax for each loop
console.log("forEach Loop Output")
cars.forEach( car => {
    console.log(car)
})

