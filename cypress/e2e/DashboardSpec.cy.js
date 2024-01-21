require('cypress-xpath')
import dashboardLocators from "../fixtures/dashboardLocators"
import methods from "../pages/Methods"
describe('Includes dashboard page test scenarios', () => {

  Cypress.on('uncaught:exception',()=>{return false})

  it('Redirect to shirts category', () => {
    methods.visit('https://demo.vercel.store/')
    methods.clickButton(dashboardLocators.shirtsLinkText)
  })

  it('Redirect to shirts category', () => {
    methods.visit('https://demo.vercel.store/')
    methods.clickButton('[href="/search/stickers"]', 5000)
  })

  it('Search product', () => {
    methods.visit('https://demo.vercel.store/')
    methods.clickButton(dashboardLocators.stickersLinkText)
    methods.fillInput(dashboardLocators.searchProductInputText,'Acme Circles T-Shirts',2000)
  })

  it('Verify dashboard page', () =>{
    methods.visit('https://demo.vercel.store/')
    cy.contains('Stickers')
    cy.contains('All')
    cy.contains('Shirts')
  })
})