import { toInteger } from "cypress/types/lodash";

export class ProductPage {

    private readonly btnProduct = '#add-to-cart-sauce-';
    private readonly btnCart = '.shopping_cart_link';
    private readonly listProducts = '[data-test="cart-list"] .cart_item';

    
    //the number of products they have added
    public amount = 0;
    private readonly removeProduct = '#remove-sauce-labs-fleece-jacket';
    

    valideteCart(){
        cy.get(this.btnCart).click(); 
        cy.get(this.listProducts).should('have.length', this.amount); 

    }

    addToCart (nameProduct :string){
        let btnAddToCart = this.btnProduct+nameProduct;
        cy.get(btnAddToCart).click();
        this.amount ++;

    }


    deleteFromCart(){
        this.valideteCart();
        cy.get(this.removeProduct).click();
        this.amount--;

    }


    buyFromCart(name: string, lastName :string , zipCode: string){
        
        cy.get("#checkout").click();
        cy.get("#first-name").type(name);
        cy.get("#last-name").type(lastName);
        cy.get("#postal-code").type(zipCode);
        cy.get("#continue").click();
        cy.get("#finish").click();
    }





}