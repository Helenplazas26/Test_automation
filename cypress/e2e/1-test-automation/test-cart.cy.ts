import { add } from "cypress/types/lodash";
import { LoginPage } from "./pageObjects/login.page";
import { ProductPage } from "./pageObjects/cart.page";


describe("Cart", () => {

    let cart = new ProductPage();
    let login = new LoginPage();


    let name = 'Dayana';
    let lastName = 'Plazas';
    let zipCode = '8072229';


        beforeEach(() => {
        // Esta línea se ejecuta antes de cada test
            cy.visit("https://www.saucedemo.com/");
        });
   
        it("Add to cart successfully", () => {
            login.login(login.user, login.password1);
            
            //Poner el nombre del producto 
            cart.addToCart("labs-fleece-jacket");
            cart.addToCart("labs-bike-light");
            cart.addToCart("labs-bolt-t-shirt");

            cart.valideteCart();

        });

        it("remove product from cart", () => {

            // clear the variable 
            cart.amount=0;

            login.login(login.user, login.password1);

            cart.addToCart("labs-fleece-jacket");

            cart.deleteFromCart();

            cart.valideteCart();
        });

        it("make a purchase", () => {

            login.login(login.user, login.password1);

            cart.amount=0;
            
            //Poner el nombre del producto 
            cart.addToCart("labs-fleece-jacket");
            cart.addToCart("labs-bike-light");

            cart.valideteCart();

            cart.buyFromCart(name,lastName,zipCode);

        });

        // 
});