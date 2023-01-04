
class Testing{

     open(){
        cy.visit('https://test3.tom-tailor.eu/')             //Staging3 URL
    }

     Cookies(){
        cy.get('#usercentrics-root').shadow().find('[data-testid="uc-accept-all-button"]').click({force:true});
    }
     Clothingbutton(){
        cy.get("p[class='typography typography--copy-reg typography--dark-blue typography--left']").eq(1).click({force:true});
     }

     Addtocartbutton(){
        cy.get('button[class="product-info__stock-button button button--primary"]').click({force:true});
     }

     Checkoutbutton(){
        const cartbttn = cy.contains('Checkout').click()
        cartbttn.click({force:true});
    }
     accountbutton(){
        const accountbtn = cy.get("button[type='button']").eq(1).click({force:true});
    }

     Search(){
        const Searchfld = cy.get('input__tag').eq(0).click();
    }

     signinemail(value){
       const emailtextbox =  cy.get('#email')
       emailtextbox.clear();
       emailtextbox.type(value);
       return this
    }

     signinpassword(value){
        const passwordtextbox =  cy.get('#password')
        passwordtextbox.clear();
        passwordtextbox.type(value);
        return this
    }

      SigninButton(){
        const signinbttn =  cy.get("div[class='button__content']")
        signinbttn.click();
        return this
    }

      Forgotpassword(value){
        const forgotpass =  cy.get("span[class='auth-form__forgot-password']")
        forgotpass.click();
        return this
    }

   
}
export default new Testing();
