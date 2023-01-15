import { LoginPage } from './pages/login_page'

it('Page Object Demo', () => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  const usernameId = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
  const passwordId = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
  const loginPage = new LoginPage('Admin', 'admin123', usernameId, passwordId, '.oxd-button')

  loginPage.visit(url)
  loginPage.login('Admin', 'admin123')
})  