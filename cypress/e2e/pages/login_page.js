export class LoginPage {

  constructor(username, password, usernameId, passwordId, submitId, url) {
    this.username = username;
    this.password = password;
    this.usernameId = usernameId;
    this.passwordId = passwordId;
    this.submitId = submitId;
    this.url = url;
  }

  visit() {
    cy.visit(this.url)
  }

  fillUsername() {
    cy.get(this.usernameId).type(this.username)
  }

  fillPassword() {
    cy.get(this.passwordId).type(this.password)
  }

  submit() {
    cy.get(this.submitId).click()
  }

  login() {
    this.fillUsername()
    this.fillPassword()
    this.submit()
  }
}