/// <reference types="cypress" /> 

//import { forEach } from "cypress/types/lodash"

//const { property } = require("cypress/types/lodash")

describe('First Test Suite',() => {

  it('First test', () => {
      // to nav to the page 

      cy.visit('/') // because this application is at the same location of base url which
      //is provided in config file
      cy.contains('Forms').click()   
      cy.contains('Form Layouts').click()

      // locators

      // find web element by Tag name
      cy.get('input') // Cypress will return all the elements which has tag name as input
      //^^ just the value.. then it is a tag

      // find web element by Id
      cy.get('#inputEmail1') // # symbol means it is an Id

      // find web element by Class value
      cy.get('.input-full-width')// . for Class 
      //^^ to find for 1 single class value

      // find web element by Attribute name
      cy.get('[fullwidth]')

      // find web element by Attribute & value
      cy.get('[placeholder="Email"]')

      // find web element by entire class value  or class & value
      cy.get('[class="input-full-width size-medium shape-rectangle"]')

      // How to find by two attributes 
      cy.get('[placeholder="Email"][fullwidth]')
      //^^ put both the values side by side without leaving any space inbetween them

      // by tag, attribute with value, id & class
      cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
      //^^ no individual commas inbetween them as well
      //Cypress will search for this independently & search for this combination
      //Cypress will search which web element has all these values together

      // How to find webelement by Cypress test id
      // special attribute - data-cy
      cy.get('[data-cy="imputEmail1"]')

  } )

  it('second test', () => {
  cy.visit('/')
  cy.contains('Forms').click()
  cy.contains('Form Layouts').click()

  //Theory
  // get() – to find elements on the page by locator globally
  // find() – to find child elements by locator
  // contains() – to find HTML text, by text & locator
  //cy.contains('Sign in') //1st Sign in
  cy.contains('[status="warning"]','Sign in') 
  //cy.contains('[type="submit"]','Sign in') //1st Sign in
  //cy.contains('[aria-disabled="false"]','Sign in') //1st Sign in
  //cy.contains('.offset-sm-3 col-sm-9','SIGN IN')->error
  //cy.get('[class="appearance-filled size-medium status-warning shape-rectangle transitions"]')// correct sign in
  //cy.get('.appearance-filled size-medium') not working
  cy.get('.status-warning').contains('Sign in') // correct sign in
  
  //Using parent locator to get the text
  cy.contains('nb-card','Horizontal form')
  // find method can find a child element in relation to the parent element
  cy.contains('nb-card','Horizontal form').find('button') // this works as there is only 1 button now
  //can't call find method directly from contains as it would be a mistake
  // we can chain contains with contains
  cy.contains('nb-card','Horizontal form').contains('Sign in')
  // if we chain contains with get.. it doesn't work
  cy.contains('nb-card','Horizontal form').get('button')

  //Cypress chains & DOM --> can create indefinite chains

  cy.get("#inputEmail3")
      .parents('form')
      .find('button')
      .should('contain','Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click() // action command. it is the norm not to have any commands after the 1 action command as 
      // this action command might have modified the structure of the page


  })

  it('Save the subject of the command testing', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      //cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
      //cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')

      //^^ works just find.. but first 1/3rd sentence is repetitive. So..

      // CANT DO THIS AS CYPRESS IS ASYNCHRONOUS
      //const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
      //usingTheGrid.find('[for="inputEmail1"]').should('contain','Email')
      //usingTheGrid.find('[for="inputPassword2"]').should('contain','Password')

      //1. Using Cypress Alias
      // cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
      // cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain','Email')
      // cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain','Password')

      //2. Using Cypress then() command
      cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
          //usingTheGridForm.find('[for="inputEmail1"]').should('contain','Email') | jQuery format
          cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain','Email')
          cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain','Password')
      })
  })

  it('Extract different Text Values from Webpage', () => {

      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()
      
      //1  Cypress code something which we are familiar with
      cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

      //2 jQuery .. label method
      cy.get('[for="exampleInputEmail1"]').then( label => {
          const labelText = label.text() // storing the returned value into a const labelText
          //.text is a jQuery method
          expect(labelText).to.equal('Email address') // assertion using jQuery methods
          //expect is a jQuery method
          cy.wrap(labelText).should('contain','Email address') // assertion using Cypress methods
      })
      //3 Cypress method - invoke
      cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
          expect(text).to.equal('Email address')
      })
      cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')// using Alias -.as('labelText')

      //4 Cypress method - invoke
      //From website, under Basic Form section, 
      //for Email address, class="label"... we are validating the same in this example using attribute feature of invoke method
      cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
          expect(classValue).to.equal('label')
      })

      //5 Properties

      cy.get('#exampleInputEmail1').type('test@test.com')
      cy.get('#exampleInputEmail1').invoke('prop','value').should('contain', 'test@test.com').then( property =>{
          expect(property).to.equal('test@test.com')  
      })       

  })

  it('Radio buttons testing', () => {
      cy.visit('/')
      cy.contains("Forms").click()
      cy.contains("Form Layouts").click()

      cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
          //to select 1st radio button.. using weights.. eq(0)
          cy.wrap(radioButtons).eq(0).check({force:true}).should('be.checked')
          //force:true --> visually hidden
          //to select 2nd radio button
          cy.wrap(radioButtons).eq(1).check({force:true})
          cy.wrap(radioButtons).eq(0).should('not.be.checked')
          //^^ because only 1 radio button can be selected at a time
          cy.wrap(radioButtons).eq(2).should('be.disabled')

      })
  })

  it('Checkboxes testing', () => {
      cy.visit('/')
      cy.contains("Modal & Overlays").click()
      cy.contains("Toastr").click()

      //cy.get('[type="checkbox"]').check({force:true})
      //Cypress checks if its is already checked or not.
      // if it is checked, no action. Not checked, then it checks it
      //cy.get('[type="checkbox"]').uncheck({force: true})
      //Cypress simply unchecks everything

      cy.get('[type="checkbox"]').eq(0).click({force:true})
      //Click doesn't check the status of the checkbox.. it just simply clicks just like the mouse action
      cy.get('[type="checkbox"]').eq(1).check({force:true})

  })

  it('Date Picker Testing', () => {
      cy.visit('/')
      cy.contains("Forms").click()
      cy.contains("Datepicker").click()
      // //For hard coded values in code
      // cy.contains('nb-card','Common Datepicker').find('input').then( input => {
      //     cy.wrap(input).click()
      //     cy.get(".day-cell").not(".bounding-month").contains("31").click()
      //     cy.wrap(input).invoke('prop','value').should('contains','Oct 31, 2023')
      //     //another way to do this,
      //     cy.wrap(input).should('have.value','Oct 31, 2023')            
      // })

      function selectDayFromCurrent(day){
      
          let date = new Date() // creating a new 'date' object .. returns current date & time
          let newDate = date.getDate() + day
          date.setDate(newDate)
          // OR the below 1 single line :)
          //date.setDate(date.getDate() + day)
          let futureDay = date.getDate() 
          let futureMonth = date.toLocaleDateString('en-IN',{month: 'short'}) 
          let futureYear = date.getFullYear() 
          // for assertion
          let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

          cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then(dateAttribute => {
              if(!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
                  //click the button to the right of the calendar
                  cy.get('[data-name="chevron-right"]').click()
                  selectDayFromCurrent(day)
              } 
              else {
                  cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
              }                
          })
          return dateToAssert
      }

          cy.contains('nb-card','Common Datepicker').find('input').then( input => {
          cy.wrap(input).click()        
          const dateToAssert = selectDayFromCurrent(92) // Function call
          cy.wrap(input).invoke('prop','value').should('contain', dateToAssert)
          //another way to do this,
          cy.wrap(input).should('have.value',dateToAssert)            
      })
  })

  it('Lists & Dropdowns Testing', () => {
      
      // 1st Method
      cy.visit('/')
              //cy.get('ngx-header').find('.select-button').click()// direct way & this flow works
      //cy.get('ngx-header').find('nb-select').click()
      //to find web element we can also do it this way by combining the locators in the get command
      cy.get('nav nb-select').click()
      cy.get('.options-list').contains('Dark').click()
      // for validation that we have clicked what we intended to click
      cy.get('nav nb-select').should('contain','Dark')

      //2 if each colour is selectable one by one using loop
      cy.get('nav nb-select').then(dropDown => {
          cy.wrap(dropDown).click()
          //Get list items one by one & then loop through it
          cy.get('.options-list nb-option').each( (listItem, index) => {
              const itemText = listItem.text().trim() 
              cy.wrap(listItem).click()
              cy.wrap(dropDown).should('contain',itemText)
              if(index <3)
              {
                  cy.wrap(dropDown).click()
              }                
          })
          //Using each metgod, we can pass different parameters like element, index, html element.
          //trim method will remove additional spaces before or after the text
      })       
      
  })

  it('Web Tables', () => {
      cy.visit('/')       
      cy.contains("Tables & Data").click()
      cy.contains("Smart Table").click()

      //1. Get the row by text
      cy.get('tbody').contains('tr','Larry').then(tableRow => {
          cy.wrap(tableRow).find('.nb-edit').click()
          cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
//after clicking on edit in line 287 --> inspect age column  has unique attribute of placeholder = Age
//data in it is cleared & new value is typed into it.
          cy.wrap(tableRow).find('.nb-checkmark').click()
          //Assertion of the updated Age value
          cy.wrap(tableRow).find('td').eq(6).should('contain','25')
      })

      //2. Get row by index
      cy.get('thead').find('.nb-plus').click()
      cy.get('thead').find('tr').eq(2).then(tableRow => {
          cy.wrap(tableRow).find('[placeholder="First Name"]').type("John")
          cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Smith")
          cy.wrap(tableRow).find('.nb-checkmark').click()
          
      })
      //For validation
      cy.get('tbody tr').first().find('td').then ( tableColumns =>{
      //^^ 'first' method returns data from the first row of the table
          cy.wrap(tableColumns).eq(2).should('contain','John')
          cy.wrap(tableColumns).eq(3).should('contain','Smith')

      })
      
      
      //3. Get each row validation
      cy.get('thead [placeholder="Age"]').clear().type('20')
      cy.wait(500)
      cy.get('tbody tr').each(tableRow => {
          cy.wrap(tableRow).find('td').eq(6).should('contain','20')
      })

      //4. To test different values, out of boundary values

      const age = [20,30,40,100]
      cy.wrap(age).each(age => {
          cy.get('thead [placeholder="Age"]').clear().type(age)
          cy.wait(500)
          cy.get('tbody tr').each(tableRow => {
              if (age == 200 || age == 100){
                  cy.wrap(tableRow).should('contain','No data found')
              } else {
                  cy.wrap(tableRow).find('td').eq(6).should('contain',age) 
              }
      })
      })

  })

  it("Tool Tips", () => {
      cy.visit('/')
      cy.contains("Modal & Overlays").click()
      cy.contains("Tooltip").click()

      cy.contains("nb-card","Colored Tooltips")
          .contains("Default").click()
      cy.get('nb-tooltip').should('contain','This is a tooltip')
      
  })

  it("Dialog", () => {
      cy.visit('/')
      cy.contains("Modal & Overlays").click()
      cy.contains("Dialog").click()

      cy.contains("nb-card","Open Dialog").contains("Open Dialog with component").click()
      cy.get('nb-card-footer').should('contain','Dismiss Dialog')
      cy.contains('Dismiss Dialog').click()
  })

  it("Smart Table dialog box", () => {
      cy.visit('/')
      cy.contains("Tables & Data").click()
      cy.contains("Smart Table").click()

      //1
      // cy.get('tbody tr').first().find('.nb-trash').click()
      // cy.on('window:confirm',(confirm) => {
      //     expect(confirm).to.equal('Are you sure you want to delete?')
      // })                
      
      //2
      // const stub = cy.stub()
      // cy.on('window:confirm',stub)
      // cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
      //     expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
      // })

      //3 --> for the pop up, if we don't confirm for deletion or NO scenario
      cy.get('tbody tr').first().find('.nb-trash').click()
      cy.on('window:confirm',() => false)
  })


})

