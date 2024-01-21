
require('cypress-xpath')

describe('template spec', () => {
  it('visit page', () => {
    cy.visit('/')
  })
  it('Reload', () => {
    cy.visit('/')
    cy.reload()
    cy.reload(true)
    cy.wait(5000)
  })
  it('GO Back an Go forward', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.go('back')
    cy.go('forward')
  })

  //QUERYING
  it('Get using css selector', () =>{
    cy.visit('/')
    cy.get("[aria-label='Open cart']")
  })

  it('Get using xpath selector', () => {
    cy.visit('/')
    cy.xpath("//button[@aria-label='Open cart']")
  })

  it('Get for attribute', () => {
    //expected value vs actual value
    cy.visit('/')
    cy.get("[type=Text]")
      .invoke('attr','name')
      .should('equal','search')
  })

  it('Contains', () => {
    cy.visit('/')
    cy.contains('Stickers').click()
    cy.wait(3000)
  })

  it('Click', () =>{
    cy.visit('/')
    cy.xpath("//span[text()='USD']").eq(1).click()
  })

  it('Type', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.xpath("//input[@name='search']").type('Acme Baby Onesie').type('{enter}')
    cy.wait(3000)
  })

  it('Add products', () => {
    cy.visit('/')
    cy.xpath("//img[@alt='Acme Drawstring Bag']").click()
    cy.wait(1000)
    cy.get('[title="Color Black"]').click()
    cy.wait(1000)
    cy.get('[title="Size 7 x 9 inch"]').click()
    cy.get('[aria-label="Add to cart"]').click()
    cy.wait(3000)
    cy.xpath('//a[text()="Proceed to Checkout"]').click()  
    cy.wait(3000)
  })

  it('Odev', () => {
    cy.visit('/')
    cy.xpath("//img[@alt='Acme Circles T-Shirt']").click()
    cy.wait(1000)
    cy.get('[title="Color White"]').click()
    cy.wait(1000)
    cy.get('[title="Size M"]').click()
    cy.wait(1000)
    cy.xpath("//button[@aria-label='Add to cart']").click()
    cy.wait(1000)
    cy.xpath("//span[@class='w-full text-sm']").find('input').type('1')
    cy.wait(5000)
  })

  it.only('Add products2', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.xpath("//input[@name='search']").type('Acme Drawstring Bag').type('{enter}')
    cy.wait(1000)
    cy.xpath("//img[@alt='Acme Drawstring Bag']").click()
    cy.get('[title="Color Black"]').click()
    cy.wait(1000)
    cy.get('[title="Size 8 x 11 inch"]').click()
    cy.wait(3000)
    cy.xpath("//button[@aria-label='Add to cart']").click()

    
  })

})