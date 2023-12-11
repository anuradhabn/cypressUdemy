/// <reference types="cypress" />

describe('JSON Objects', () => {

    it('JSON Objects T1', () => {
        cy.openHomePage()

        const simpleObject = {"key1": "value1","key2": "value2","key3": "value3"}

        const simpleArrayOfValues = ["value1","value2","value3"]
        // to access above values.. we need to use Index positions.. & they start from 0

        const arrayOfObjects = [{"key1": "value1","key2": "value2","key3": "value3"}]
        
        //Below are types of data which are used in JSON objects
        const typesOfData = {"string": "this is a string", "number" : 1000}

        const mixObjects = {
            "FirstName": "ABN",
            "LastName": "CEO",
            "Age": "35",
            "Students": [
                { "firstName":"Sara",
                   "lastName": "Tendulkar"
                },
                { "firstName":"Bruce",
                   "lastName": "Williams"
                }
            ]
        }

        console.log(simpleObject.key2)
        //getting the value knowing the key
        console.log(simpleObject["key2"])
        //to get data from array
        console.log(simpleArrayOfValues[1])
        //get the 2nd object from the array.. get the key of the 3rd object
        //console.log(arrayOfObjects[2])
        //get info from mixObjects
        console.log(mixObjects.Students[0].lastName)

        const lastNameOfSecondStudent = mixObjects.Students[1].lastName
        console.log(lastNameOfSecondStudent)
    })
})