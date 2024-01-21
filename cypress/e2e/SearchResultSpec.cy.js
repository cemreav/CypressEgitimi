require('cypress-xpath')
import searchResult from "../fixtures/searchResult"
import dashboardLocators from "../fixtures/dashboardLocators"
import productDetails from "../fixtures/productDetails"
import methods from "../pages/Methods"
describe('Includes dashboard page test scenarios', () => {

  it.only('Search product white color type and 6x8 size', () => {
    methods.visit('https://demo.vercel.store/')
    methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
    methods.clickButton(searchResult.searchResultProduct)
    methods.wait(1000)
    methods.clickButton(productDetails.colorWhiteType,1000)
    methods.clickButton(productDetails.productSizeType,1000)
    methods.clickButton(productDetails.addToCartButton)
    methods.shouldHaveText(productDetails.addedProductText,'Acme Drawstring Bag')
    methods.shouldHaveText(productDetails.addedProductTypes,'White / 6 x 8 inch')
  })
  it.only('Search product white color type and 7x9 size', () => {
    methods.visit('https://demo.vercel.store/')
    methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
    methods.clickButton(searchResult.searchResultProduct)
    methods.wait(1000)
    methods.clickButton(productDetails.colorWhiteType,1000)
    methods.clickButton(productDetails.productSizeType,1000)
    methods.clickButton(productDetails.addToCartButton)
    methods.shouldHaveText(productDetails.addedProductText,'Acme Drawstring Bag')
    methods.shouldHaveText(productDetails.addedProductTypes,'White / 6 x 8 inch')
  })
})