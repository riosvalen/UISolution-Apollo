import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage  from '../../../pages/LoginPage';
const login = new LoginPage();

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (TST, STG, etc.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(envi).url_apollo;
//transformar variable a alias
//cy.wrap(usuario).as("nombreUsuario")
//cy.wrap(contraseña).as("contraseñaUsuario")

Given("el usuario abre la web de Apollo", () => {
    cy.visit(`${url}`);
});

When("el usuario hace click en iniciar sesion", () => {
    login.clickLogin()
});

Then("el sistema abre el modal de inicio de sesion", () =>{
    login.compareLoginModal();
});

When("el usuario ingresa el correo electronico tourist valido", () =>{
    login.sendTouristUsername();
});

When("el usuario hace click en continuar", () =>{
    login.clickNextStep();
    cy.wait(500)
});

When("el usuario ingresa la contraseña turista", () =>{
    login.sendTouristPassword()
});

When("el usuario hace click en continuar al sitio turista", () =>{
    login.clickContinueToSiteTourist();
});

When("el usuario hace click en continuar al sitio partner", () =>{
    login.clickContinueToSitePartner();
})

Then("el sistema muestra el modal de ingreso", () =>{
    login.compareWelcomeModal();
});

Then("el sistema muestra la home de apollo", () =>{
    login.compareApolloHome();
});

//TC-2

When("el usuario ingresa el correo electronico no valido", () =>{
    login.SendInvalidUser();
});

Then("el sistema muestra el modal de registro", () =>{
login.compareSignUpModal();
});

//TC_3
 When("el usuario ingresa una contraseña invalida", () =>{
    login.sendInvalidPassword();
 });

 Then("el sistema muestra error en la contraseña", () =>{
    login.failedPassMessage();
 });
 
 //TC-4
 When("el usuario ingresa el correo electronico partner SIC valido", () =>{
    login.sendSicUsername();
 });

 When("el usuario ingresa la contraseña partner SIC", () =>{
    login.sendSicPassword();
 });

 //TC-6
 When("el usuario hace click en ingresar al panel", () =>{
    login.clikIngressPanel();
 });

 //Then("el sistema muestra la home de pdclite", () =>{
    //login.visitPdcLiteHome();
// });

 //TC-7

 When("el usuario ingresa el correo electronico partner SIRO valido", () =>{
    login.sendSiroUser();
 });

 When("el usuario ingresa la contraseña partner SIRO", () =>{
    login.sendSiroPassword();
 });
 
 //TC-10

 When("el usuario hace click en el menu", () =>{
    login.clickMenuApollo();
 });

 When("el usuario hace click en cerrar sesion", () =>{
    login.clickLogout();
 });

 Then("el sistema muestra el menu con el boton de inicio de sesion", () =>{
    login.compareLogout();
 });






