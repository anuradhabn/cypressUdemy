 //objects
 var customer = {
    firstName:'Test',
    lastName:'Smith',
    cars : ["Audi","Benz","Tesla"]

}
//console.log(customer)
// 2 ways to access/print data
console.log(customer.firstName)
console.log(customer['firstName'])

//to change/update value
//dot notation
customer.firstName = "QA"
console.log(customer.firstName)
//bracket notation
customer['lastName'] = "Lambda"
console.log(customer.lastName)

// Printing using Interpolation method
 console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays

var car = ["Audi","Benz","Tesla"]
console.log(car[0])
console.log(car[1])
console.log(car[2])
//Before change
console.log(car)
car[2] = "BMW"
//console.log(car[2])
//After change
console.log(car)

console.log(customer.cars[0])