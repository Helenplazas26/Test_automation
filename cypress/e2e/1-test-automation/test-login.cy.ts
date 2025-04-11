
import { LoginPage } from "./pageObjects/login.page";

describe("Login Test", () => {

    let login = new LoginPage

    beforeEach(() => {
        // Esta línea se ejecuta antes de cada test
        cy.visit("https://www.saucedemo.com/");
    });

    it("Log in with valid credentials", () => {
        // Login
        login.login(login.user, login.password1);
        
    });

    it("DO NOT log in with invalid credentials", () => {
        
        login.login('standard', 'Daya3011');
    
    });

});