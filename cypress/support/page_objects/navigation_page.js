function selectGroupMenuItem(groupName){
    cy.contains('a',groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if(attr.includes('chevron-left')){//chevron-left is when header is closed
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{
    //create individual methods for each drop down
    formLayoutsPage(){
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }

    formDatePicker(){
        selectGroupMenuItem('Form')
        cy.contains("Datepicker").click()
    }

    toasterPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains("Toastr").click()
    }

    smartTablePage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains("Smart Table").click()
    }
    toolTipPage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains("Tooltip").click()
    }

}

//creating a new instance & assigning it to the object
export const navigateTo = new NavigationPage()
//export {NavigationPage}