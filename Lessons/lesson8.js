//JS Functions
//to org code into reusable components

//1. Declarative function
//Declarative fn can be invoked before it's code is written

function helloOne(){
    //body of the fn
    // console.log("Hello one!")
}
helloOne()
helloOne()

//2. Anonymous Function
//^^ doesn't have a name...we create a var which is assigned to the fn
//Anonymous Func cannot be invoked before it's code is written
var helloTwo = function(){
    // console.log("Hello two!")
}
helloTwo()

//3. ES6 function or arrow function
//it is anonymous fn but with ES6 syntax.. hence cna't be invoked before describing it
//function is replaced with () followed with => {}
var helloThree = () => {
    // console.log("Hello three!")
}
helloThree()

//function with arguments
printName("Siya","Ram")
function printName(name,lastName){
//   console.log(name+" " +lastName)
//   console.log(`${name} ${lastName}`)    
}

//function with return

// function multiplybyTwo(number){
//     var result = number *2
//     return result
// }

// var myResult = multiplybyTwo(100)
// console.log(myResult)

//we can keep all the functions in one file 
// & invoke them  from another file

//import function theory

import {printAge} from '../helpers/printHelper.js'
printAge(100)

//import everything

import * as helper from '../helpers/printHelper.js'
helper.printAge(99)