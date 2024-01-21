
import searchResult from "../fixtures/searchResult"
import dashboardLocators from "../fixtures/dashboardLocators"
import productDetails from "../fixtures/productDetails"
import methods from "../pages/Methods"
require('cypress-xpath')

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('URL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Shirts']").click()
    cy.url().should('eq','https://demo.vercel.store/search/shirts')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/search/shirts')
      expect(location.pathname).to.eq('/search/shirts')
      expect(location.protocol).to.eq('https:')
    })
  })

  it('URL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Stickers']").click()
    cy.url().should('eq','https://demo.vercel.store/search/stickers')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/search/stickers')
      expect(location.pathname).to.eq('/search/stickers')
      expect(location.protocol).to.eq('https:')
    })
})

  it.only('HomeURL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Home']").click()
    cy.url().should('eq','https://demo.vercel.store/')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/')
    })
  })
  it.only('AboutURL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='About']").click()
    cy.url().should('eq','https://demo.vercel.store/about')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/about')
    })
  })
  it.only('Terms & ConditionsURL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Terms & Conditions']").click()
    cy.url().should('eq','https://demo.vercel.store/terms-conditions')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/terms-conditions')
    })
  })
  it.only('Shipping & Return PolicyURL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Shipping & Return Policy']").click()
    cy.url().should('eq','https://demo.vercel.store/shipping-return-policy')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/shipping-return-policy')
    })
  })
  it.only('Privacy PolicyURL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Privacy Policy']").click()
    cy.url().should('eq','https://demo.vercel.store/privacy-policy')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/privacy-policy')
    })
  })
  it.only('FAQURL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='FAQ']").click()
    cy.url().should('eq','https://demo.vercel.store/frequently-asked-questions')
    cy.location().should((location) => {
      expect(location.href).to.eq('https://demo.vercel.store/frequently-asked-questions')
    })
  })
})