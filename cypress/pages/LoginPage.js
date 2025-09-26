class LoginPage {
    elements = {
      loginBtn: () => cy.contains('button', 'Iniciar sesión'),
      loginModal: () => cy.get('a[href="https://www.aatest.host/terminos-condiciones.html"]'),
      usernameInput: () => cy.get('.css-1ago99h > .MuiFormControl-root > .MuiInputBase-root > #email'),
      passwordImput: () => cy.get('#password'),
      nextStepBtn: () => cy.get('[data-testid="AAButton"]'),
      welcomeModal: () => cy.get('[data-testid="Title"]'),
      continueToSiteBtn: () => cy.get('[data-testid="AAButton"]').eq(1).should("contain", "Continuar al sitio"),
      continueToSiteBtnTourist: () => cy.get('[data-testid="AAButton"]'),
      apolloHome: () => cy.get('p.css-ogouzy'),
      menuBtn: () => cy.get('[data-testid="MenuIcon"]'),
      logoutBtn: () => cy.contains('span', 'Cerrar sesión'),
      loginBtnMenu: () => cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root'),
      userNameSession: () => cy.contains('span', 'Automation'),
      myReservationButton: () => cy.contains('span', 'Mis reservas'),
      signUpModal: () => cy.contains('p', 'Ingresá tus datos para crear una cuenta'),
      failedPassMesagge: ()=> cy.get('#password-helper-text'),
      ingressPanelBtn: ()=> cy.get('button.MuiButton-containedSizeMedium'),
      pdcLiteHomeUrl: ()=> cy.url({ timeout: 120000 }).should('include', '/https://pdclite.aatest.host/sire/44498/listado'), //ver de mover a una page de pdclite
      pdcLiteHome: ()=> cy.contains('h6', 'Gestor de reservas'), //ver de mover a una page de pdclite
    };
  
    clickLogin() {
      this.elements.loginBtn().click();
    };

    compareLoginModal() {
      this.elements.loginModal().should("contain", "Términos y condiciones");
    };

    sendTouristUsername() {
      const userTourist = Cypress.env(Cypress.env('ENV')).touristUsername;
      this.elements.usernameInput().type(userTourist)
    };
    
    sendUsername(usuario) {
      this.elements.usernameInput().type(usuario);
    };

    SendInvalidUser() {
      const invalidUser = Cypress.env(Cypress.env('ENV')).invalidUsername;
      this.elements.usernameInput().type(invalidUser)
    };

    sendSicUsername() {
      const usuario = Cypress.env(Cypress.env('ENV')).sicUsername;
      this.elements.usernameInput().type(usuario);
    };

    sendSiroUser() {
      const usersiro = Cypress.env(Cypress.env('ENV')).siroUsername;
      this.elements.usernameInput().type(usersiro)
    };

    sendSiroPassword() {
      const passwordsiro = Cypress.env(Cypress.env('ENV')).siroPassword;
      this.elements.passwordImput().type(passwordsiro)
    };

    sendSicPassword() {
      const password = Cypress.env(Cypress.env('ENV')).sicPassword;
      this.elements.passwordImput().type(password);
    };

    sendInvalidPassword() {
      const password = Cypress.env(Cypress.env('ENV')).invalidPassword;
      this.elements.passwordImput().type(password);
    };

    sendTouristPassword() {
      const touristpass = Cypress.env(Cypress.env('ENV')).touristPassword;
      this.elements.passwordImput().type(touristpass);
    };

    sendPassword(contraseña) {
      this.elements.passwordImput().type(contraseña);
    };

    clickNextStep() {
      this.elements.nextStepBtn().click();
    };

    compareWelcomeModal() {
      this.elements.welcomeModal().should("contain", "¿Cómo querés continuar?");
    };

    clickContinueToSitePartner() {
      this.elements.continueToSiteBtn().click()
    };

    clickContinueToSiteTourist() {
      this.elements.continueToSiteBtnTourist()
    };

    compareApolloHome() {
      this.elements.myReservationButton().should("contain", "Mis reservas");
    };

    clickMenuApollo() {
      this.elements.menuBtn().click();
    };

    clickLogout() {
      this.elements.logoutBtn().click();
    };

    compareLogout() {
      this.elements.loginBtnMenu().should("contain", "Iniciá sesión o registrate");
    };

    compareSignUpModal() {
      this.elements.signUpModal().should("contain", "Ingresá tus datos para crear una cuenta");
    };

    failedPassMessage() {
      this.elements.failedPassMesagge().should("contain", "Contraseña incorrecta, intente nuevamente");
    };

    clikIngressPanel() {
      this.elements.ingressPanelBtn().should("contain", "Ingresar al panel").click();
    };

    visitPdcLiteHome() {
      this.elements.pdcLiteHome().should("contain", "Gestor de reservas")
      //cy.url({ timeout: 10000 }).should('include', 'https://pdclite.aatest.host/sire/44498/listado');
    }

    }

    //typeUsername(username) {
      //this.elements.usernameInput().type(username);
    //}
  
    //typePassword(password) {
      //this.elements.passwordInput().type(password);
    //}
  
    //clickLogin() {
      //this.elements.loginBtn().click();
    //}

    //getErrorMessage() {
      //return this.elements.errorText();
    //}
//}
  
export default LoginPage;