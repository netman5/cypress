/// <reference types="cypress" />

before(() => {
  cy.fixture('example.json').as('data')
})

it('Using the before Data', () => {
  cy.get('@data').then((data) => {
    const { name, email, body } = data
    cy.expect(name).to.equal("Ola Ishola")
    cy.expect(email).to.equal("hello@cypress.io")
    cy.expect(body).to.contain("Fixtures")

  })
})

it('Read files using fixture', () => {
  cy.fixture('example.json').then((data) => {
    cy.log(data.name)
    cy.log(data.email)

    cy.expect(data.email).to.equal("hello@cypress.io")
    cy.expect(data.name).to.equal("Ola Ishola")
  })
})

it('Access JSON files with key', () => {
  cy.fixture('example').its('name').should('eq', 'Ola Ishola')
  cy.fixture('example').its('email').should('eq', 'hello@cypress.io')
  cy.fixture('example').its('body').should('contain', 'Fixtures')
})

it('Read files using readFile', () => {
  cy.readFile('cypress/fixtures/example.json').then((data) => {
    cy.log(data.name)
    cy.log(data.email)

    cy.expect(data.email).to.equal(data.email)
    cy.expect(data.name).to.equal(data.name)
    cy.expect(data.body).to.contain(data.body)
    cy.expect(data.name).to.equal("Ola Ishola")
  })
})

it('Writing file to the system', () => {
  const arrData = [
    { name: 'Ola', email: 'some@mail.com' },
    { name: 'Dee', email: 'some@mail.com' },
    { name: 'kate', email: 'some@mailer' },
  ]
  cy.writeFile('./cypress/fixtures/myfile.json', arrData)
})