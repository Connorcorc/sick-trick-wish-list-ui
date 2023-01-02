describe('trick', () => {
  beforeEach(() => {
    // cy.intercept({
    //   method: 'GET',
    //   url: 'http://localhost:3001/api/v1/tricks'
    // }, { fixture: 'tricks' })
    cy.visit('http://localhost:3000/')

  })

  it('should visit app page', () => {
    cy.url('http://localhost:3000/')
  })

  it('should display tricks', () => {
    cy.get('.trickContainer > :nth-child(1)')
    cy.get('.trickContainer > :nth-child(2)')
    cy.get('.trickContainer > :nth-child(3)')
  })

  it('should have a trick name, obstacle, stance', () => {
    cy.get('.trickContainer > :nth-child(1)')
    .get('h2').contains('treflip')
    .get(':nth-child(2)').contains('flat ground')
    .get(':nth-child(3)').contains('regular')
  })

  it('should add a trick', () => {
    cy.get('input').type('BananaFlip')
    cy.get('[name="stance"]').select('Switch')
    cy.get('[name="obstacle"]').select('Ledge')
    cy.get('button').click()
    cy.get('.trickContainer > :nth-child(4)')
    cy.get(':nth-child(4) > h2').contains('BananaFlip')

  })




})
