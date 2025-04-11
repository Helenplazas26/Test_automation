export class LoginPage{

    // Selectors
    private readonly field_user = '#user-name';
    private readonly field_password = '#password';
    private readonly btn_login = '#login-button';


    // correct username and password
    public readonly user ='standard_user';
    public readonly password1 ='secret_sauce';

   // Method to log in
    login(user: string, password : string){
        cy.get(this.field_user).type(user)
        cy.get(this.field_password).type(password);
        cy.get(this.btn_login).click();
    }

}