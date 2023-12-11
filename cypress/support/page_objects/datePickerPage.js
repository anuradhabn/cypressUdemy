function selectDayFromCurrent(day) {

    let date = new Date() // creating a new 'date' object .. returns current date & time
    let newDate = date.getDate() + day
    date.setDate(newDate)
    // OR the below 1 single line :)
    //date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-IN', { month: 'short' })
    let futureYear = date.getFullYear()
    // for assertion
    let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
        if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
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


export class DatePickerPage {

    //Common date picker
    selectCommonDatePickerDateFromToday(dayFromToday) {
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            const dateToAssert = selectDayFromCurrent(92) // Function call
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
            //another way to do this,
            cy.wrap(input).should('have.value', dateToAssert)
        })
    }

    //Datepicker With Range
    selectDatepickerWithRangeFromToday(firstDay,secondDay) {

        cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
            cy.wrap(input).click()
            const dateToAssertFirst = selectDayFromCurrent(firstDay) // Function call
            const dateToAssertSecond = selectDayFromCurrent(secondDay) // Function call
            const finalDate = dateToAssertFirst + ' - ' + dateToAssertSecond 


            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            //another way to do this,
            cy.wrap(input).should('have.value', finalDate)
        })
    }
}

export const onDatePickerPage = new DatePickerPage()