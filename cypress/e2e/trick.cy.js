describe('trick', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: '../fixtures/tricks.json'
    })
    cy.visit('http://localhost:3000/')

  })

  it('should visit app page', () => {
    cy.url('http://localhost:3000/')
  })

  it('should display tricks', () => {
    cy.get('.trickContainer > :nth-child(1)')
  })

  it('should have a trick name, obstacle, stance', () => {
    cy.get('.trickContainer > :nth-child(1)')
    .get('h2').contains('treflip')
    .get(':nth-child(2)').contains('flat ground')
    .get(':nth-child(3)').contains('regular')
  })

  it('should add a trick', () => {
    cy.get('[placeholder="Which Trick You Wanna Do?!"]').type('BananaFlip')
    cy.get('[name="stance"]').select('Switch')
    cy.get('[name="obstacle"]').select('Ledge')
    cy.get('button.option').click()
    cy.get('.trickContainer > :nth-child(2)')
    cy.get(':nth-child(2) > h2').contains('BananaFlip')
  })

  it('should delete trick', () => {
    cy.get('.trickContainer > :nth-child(1)').click()
  })




})
