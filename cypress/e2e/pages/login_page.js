export class LoginPage {

  constructor(username, password, usernameId, passwordId, submitId) {
    this.username = username;
    this.password = password;
    this.usernameId = usernameId;
    this.passwordId = passwordId;
    this.submitId = submitId;
  }

  visit(url) {
    cy.visit(url)
  }

  fillUsername(username) {
    cy.get(this.usernameId).type(username)
  }

  fillPassword(password) {
    cy.get(this.passwordId).type(password)
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