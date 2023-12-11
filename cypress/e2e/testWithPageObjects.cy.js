/// <reference types="cypress" />
import { onDatePickerPage } from "../support/page_objects/datePickerPage.js"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage.js"
import { navigateTo } from "../support/page_objects/navigation_page.js"
import { onSmartTablePage } from "../support/page_objects/smartTablePage.js"

describe('Test with Page Objects Model', () => {
    beforeEach('Open Application', () => {
        //cy.visit('/')
        cy.openHomePage()        
    })

    it('Verify Navigation across the pages', () =>{
        //Creating a page object responsible for navigation in the Menu 
    navigateTo.formLayoutsPage()    
    navigateTo.formDatePicker()
    navigateTo.smartTablePage()
    navigateTo.toasterPage()
    navigateTo.toolTipPage()
    })

    it('Should submit Inline & Basic form & Select Tomorrow date in calendar', () =>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInLineFormWithNameAndEmail('QA','test.test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test.test@test.com','password')
        
        navigateTo.formDatePicker()
        onDatePickerPage.selectCommonDatePickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7,14)
        
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Test','QA')
        onSmartTablePage.updateAgeByFirstName('Test','25')
        onSmartTablePage.deleteRowByIndex(1)
    })
})