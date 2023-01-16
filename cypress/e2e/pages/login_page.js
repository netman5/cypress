export class LoginPage {

  constructor(usernameInputBoxId, passwordInputBoxId, submitId) {
    this.usernameInputBoxId = usernameInputBoxId;
    this.passwordInputBoxId = passwordInputBoxId;
    this.submitId = submitId;
  }

  visit(url) {
    cy.visit(url)
  }

  fillUsername(username) {
    cy.get(this.usernameInputBoxId).type(username)
  }

  fillPassword(password) {
    cy.get(this.passwordInputBoxId).type(password)
  }

  submit() {
    cy.get(this.submitId).click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }
}