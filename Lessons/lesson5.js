//Logical Operators
// Logical "AND"
console.log("Logical AND")
console.log(false && false)
console.log(false && true)
console.log(true && false)
console.log(true && true)
//^^ all values will have to be TRUE for the expression to be TRUE

// Logical "OR"
console.log("Logical OR")
console.log(false || false)
console.log(false || true)
console.log(true || false)
console.log(true || true)
//^^ any value has to be TRUE for the expression to be TRUE

//Example
var ageIsMoreThan18 = false
var isIndianCitizen = false
var elig4DL = ageIsMoreThan18 && isIndianCitizen
console.log(`This customer is eligible for DL: ${elig4DL}`)
var elig4LL = ageIsMoreThan18 || isIndianCitizen
console.log(`This customer is eligible for LL: ${elig4LL}`)

// Logical NOT - ulta
console.log("Logical NOT")
console.log(!true)
console.log(5 !== 10)