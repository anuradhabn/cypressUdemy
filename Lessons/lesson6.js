//Conditional Statement

//if hour b/w 6 & 12 print "Good Morning"
//if hour b/w 12 & 18 print "Good Afternoon"
//Else/Otherwise print "Good Evening"

var hour = 17

if(hour >=6 && hour <12){
    console.log('Good Morning')
} else if (hour >=12 && hour <18) {
    console.log('Good Afternoon')
}else {
    console.log('Good Evening')
}

var ageIsMoreThan18 = true
var isIndianCitizen = false
var elig4DL = ageIsMoreThan18 && isIndianCitizen

if(ageIsMoreThan18 && isIndianCitizen){
    console.log(`This customer is eligible for DL: ${elig4DL}`)  
} else {
    console.log(`This customer is NOT eligible for DL: ${elig4DL}`)
}