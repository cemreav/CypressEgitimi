require('cypress-xpath')
import searchResult from "../fixtures/searchResult"
import dashboardLocators from "../fixtures/dashboardLocators"
import productDetails from "../fixtures/productDetails"
import methods from "../pages/Methods"
import saucedemoDetails from "../fixtures/saucedemoDetails"

describe('Saucedemo page test scenarios', () => {
  Cypress.on('uncaught:exception',()=>{return false})  
    it('Saucedemo login', ()=>{
        methods.visit('https://www.saucedemo.com/')
        methods.fillInput(saucedemoDetails.usernameInput,'standard_user')
        methods.fillInput(saucedemoDetails.passwordInput,'secret_sauce')
        methods.clickButton(saucedemoDetails.loginButton,2000)
        methods.clickButton(saucedemoDetails.productTextTshirt,1000)
        methods.clickButton(saucedemoDetails.addToCardButton,1000)
        methods.clickButton(saucedemoDetails.shoppingBasketButton,1000)
        methods.shouldHaveText(dashboardLocators.removeLinkText, 'Remove')
        methods.clickButton(saucedemoDetails.checkoutButton,1000)
        methods.fillInput(saucedemoDetails.firstNameInput, 'first product name')
        methods.fillInput(saucedemoDetails.lastNameInput,'last product name')
        methods.fillInput(saucedemoDetails.postalCodeInput,'last product postalcode')
        methods.clickButton(saucedemoDetails.continueButton,1000)
        methods.shouldHaveText(dashboardLocators.paymentText,'Payment Information')
        methods.shouldHaveText(dashboardLocators.shippingText,'Shipping Information')
        methods.shouldHaveText(dashboardLocators.priceText,'Price Total')
        methods.clickButton(saucedemoDetails.finishButton,1000)
        methods.shouldHaveText(dashboardLocators.finishText,'Thank you for your order!')
    })
})