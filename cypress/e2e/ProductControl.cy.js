require('cypress-xpath')
import searchResult from "../fixtures/searchResult"
import dashboardLocators from "../fixtures/dashboardLocators"
import productDetails from "../fixtures/productDetails"
import methods from "../pages/Methods"
describe('template spec', () => {

  it.only('Checking items', () => {
    methods.visit('https://demo.vercel.store/')
    methods.fillInput(dashboardLocators.searchProductInputText, 'Acme Circles T-Shirt{enter}')
    methods.clickButton(searchResult.searchResultProductTshirt)
    methods.wait(1000)
    methods.clickButton(productDetails.colorWhiteTypeTshirt,1000)
    methods.clickButton(productDetails.productSizeTypeTshirt,1000)
    methods.clickButton(productDetails.addToCartButton)
    methods.wait(1000)
    methods.clickButton(productDetails.addedTshirtItems,1000)
    methods.shouldHaveText(productDetails.itemsText,"$30,00USD")
  })
})