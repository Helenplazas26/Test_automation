
describe("Login Tests", () => {

  beforeEach(() => {
    // Esta línea se ejecuta antes de cada test
    cy.visit("https://www.saucedemo.com/");
  });

  it("Log in with valid credentials", () => {
    // Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.scrollTo(0, 500); // Se mueve 500 píxeles hacia abajo
    
  });

  it("DO NOT log in with invalid credentials", () => {
    cy.get("#user-name").type("standard");
    cy.get("#password").type("Daya123");
    cy.get("#login-button").click();
  });

});


describe("test to buy products", () => {
  
  it("Buy product correctly", () => {

    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.scrollTo('top');
    cy.get(".shopping_cart_link").click();

    cy.get("#checkout").click();
    cy.get("#first-name").type("Dayana");
    cy.get("#last-name").type("Plazas");
    cy.get("#postal-code").type("8072229");
    cy.get("#continue").click();
    cy.get("#finish").click();

  });
});


