import React from 'react';
import Quiz from '../../client/src/components/Quiz.js';

const mockQuestions = {
    question: 'What is the output of print(2 ** 3)?',
    answers: [
        { text: '6', isCorrect: false },
        { text: '8', isCorrect: true },
        { text: '9', isCorrect: false },
        { text: '12', isCorrect: false },
    ],
};

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', {
            statusCode: 200,
            body: [mockQuestions],
        }).as('getQuestions');
    });

    it('renders the quiz start screen', () => {
        cy.mount(<Quiz />);
        cy.get('button').should('have.text', 'Start Quiz');
    });

    it('renders the quiz question after starting', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click(); // Start the quiz
        cy.wait('@getQuestions');

        cy.get('h2').should('have.text', 'What is the output of print(2 ** 3)?');
    });

    it('selects the correct answer and shows final score', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');

        // Select the correct answer (index 1, which is button "2")
        cy.get('button').contains('2').click();

        cy.contains('Quiz Completed').should('exist');
        cy.contains('Your score: 1/1').should('exist');
    });

    it('restarts the quiz after completion', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');

        cy.get('button').contains('2').click(); // correct answer
        cy.contains('Take New Quiz').click();


    });
});
