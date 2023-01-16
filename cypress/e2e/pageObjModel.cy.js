import { LoginPage } from './pages/login_page'

const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
const usernameId = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const passwordId = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';

const loginPage = new LoginPage(usernameId, passwordId, '.oxd-button');
beforeEach(() => {
  loginPage.visit(url)
})

describe('All login Tests', () => {

  it('Login with valid credentials', () => {
    loginPage.login('Admin', 'admin123');
    cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible');
    cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click();
  });

  it('Login with invalid username', () => {
    loginPage.login('Admins', 'admin123');
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
  });
})

it('Login with invalid password', () => {
  loginPage.login('Admin', 'admin12367');
  cy.get(':nth-child(1) > .oxd-main-menu-item').click();
});