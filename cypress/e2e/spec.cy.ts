describe('Tech Quiz App - E2E Test', () => {
    beforeEach(() => {
      cy.fixture('questions.json').then((mockQuestions) => {
        cy.intercept('GET', '/api/questions/random', {
          statusCode: 200,
          body: mockQuestions,
        }).as('getQuestions');
      });
  
      cy.visit('http://localhost:3001'); // Replace with your actual app port if needed
    });
  
    it('should complete the quiz and restart', () => {
      // Start the quiz
      cy.contains('Start Quiz').click();
      cy.wait('@getQuestions');
  
      // Answer all questions (assumes 2 in fixture)
      for (let i = 0; i < 2; i++) {
        cy.get('h2').should('exist');
        cy.get('button').contains('2').click();
      }
  
      // Validate final screen
      cy.contains('Quiz Completed').should('exist');
      cy.contains('Your score:').should('exist');
  
      // Click "Take New Quiz"
      cy.contains('Take New Quiz').click();
  
      // 👇 Wait for new questions to load again
      cy.wait('@getQuestions');
  
      
    });
  });
  