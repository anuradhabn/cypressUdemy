export function printAge(age){
    console.log(age)
}

//
//className needs start with capitalcase
//methodName is camelCase
class CustomerDetails{
    //Body of Class
    printFirstName(firstName){
        console.log(firstName)
            }
    /**
     * This will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)        
    }
}
export const customerDetails = new CustomerDetails()// constructor