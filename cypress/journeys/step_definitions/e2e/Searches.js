import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage  from '../../../pages/HomePage';
import LoginPage from '../../../pages/LoginPage';
import ListingPage from '../../../pages/ListingPage';       
const home = new HomePage();
const login = new LoginPage();

When("el usuario ingresa el destino {string} en el buscador", (destino) =>{
    home.sendDestination(destino)
})

When("el usuario hace click en buscar", () =>{
    home.clickSearch()
})

Then("el sistema muestra resultados de alojamiento en {string}", (destino) =>{
    const candidates = posiblesMatches(destino)
})