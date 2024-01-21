
require('cypress-xpath')
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://pts.paynet.com.tr/Account/Login')
  })

  it('login', () => {
    cy.visit('https://pts.paynet.com.tr/Account/Login')
    //cy.xpath("//span[@class='label off']").click()
    cy.wait(1000)
    cy.get('[name="CustomerCode"]').type("1001")
    cy.get('[name="Username"]').type("cemrea")
    cy.xpath("//input[@id='login-password']").type("404040")
    cy.wait(1000)
    cy.xpath("//button[@id='paynetLoginBtn']").click()
    cy.xpath("//div[@class='modal-header sms-password-create-header']").should('have.text', 'Doğrulama')
  })

  it.only('login example', () => {
    cy.visit('autopilot.mynak.net/auth/login/')
    cy.wait(1000)
    cy.get('#email').type("admin@example.com")
    cy.get('#password').type("secret")
    cy.get('[type="submit"]').click();
    cy.xpath("//span[@class='user-name']").contains('Super Admin').should((element)=>{
      expect(element.text()).to.equal('Super Admin')
    })
  })

  
})