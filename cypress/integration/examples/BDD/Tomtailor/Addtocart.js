import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import Testing from "../../../page objects/home-page";
 
let A;
let C;

Given('Open the Product List Page and click any product',()=>
{
    Testing.open();
    Testing.Cookies();
    cy.get("p[class='typography typography--copy-reg typography--dark-blue typography--left']").eq(1).click({force:true}); //Click Men
    cy.get("p[class='typography typography--copy-reg typography--dark-blue typography--left']").eq(7).invoke('show')
    cy.get('[title="Jeans"]').eq(0).click({force:true});
    cy.wait(2000)
    cy.get('[class="product-tile__banner product-tile__banner--flexible"]').eq(1).should('be.visible').click({force:true});
})

When('Select the colour and size of the product and click add to cart', ()=>
{
    cy.get("h1[class='product-tile__h5']").invoke('text').then((Text1) =>{                                  //Title of the product
    A = Text1;
    console.log(A);
    })
    cy.get('button[class="size-button size-buttons__button "]').eq('5').click({force:true});                //Size of the Produt
    cy.get("button[class='size-button size-buttons__button size-button--selected']").invoke('text').then((Size1) =>{     //Size of the Product Text
        C = Size1;
        console.log(C);
        })
    cy.get('button[class="product-info__stock-button button button--primary"]').click({force:true});        //Add to cart Click
})

When('Navigate to the cart', ()=>
{
    cy.get("svg[class='icon__svg icon  header__icon-svg']").eq(3).click({force:true});                       //Navigate to Cart
})

Then('The added product should display in the Cart with same colour, size and count', ()=>
{   
    cy.wait(3000)
    cy.get("small[class='typography typography--small typography--dark-blue typography--left typography--truncate typography--capitalize']").eq(1).invoke('text').then((Cartvalue) =>{
    var B = Cartvalue;
    console.log(B);
    expect(A).to.contain(B);
    })
    cy.get('.cart-item__quantity-value').eq(1).invoke('text').then((Size2) =>{
        var D = Size2;
        console.log(D);
        expect(C).to.contain(D);
        })
    
    cy.get("div[class='cart-item__single-value css-1uccc91-singleValue']").eq(0).should('have.text', 'Amount: 1')
})



Given('Open the Cart in which product is available',()=>
{
    Testing.open();
    Testing.Cookies();
    cy.get("p[class='typography typography--copy-reg typography--dark-blue typography--left']").eq(1).click({force:true}); 	//Click Men
    cy.get("p[class='typography typography--copy-reg typography--dark-blue typography--left']").eq(7).invoke('show')	
    cy.get('[title="Jeans"]').eq(0).click({force:true});
    cy.get('[class="product-tile__banner product-tile__banner--flexible"]').eq(1).should('be.visible').click({force:true});
    cy.get('button[class="size-button size-buttons__button "]').eq('5').click({force:true}); 
    cy.get('button[class="product-info__stock-button button button--primary"]').click({force:true});
    cy.get("svg[class='icon__svg icon  header__icon-svg']").eq(3).click({force:true});
    
})

When('Remove the product from cart', ()=>
{
    cy.get("svg[class='icon__svg icon cart-item__icon cart-item__icon-cross ']").eq(1).click({force:true});
})

Then('The product should be removed from cart',()=>
{
    
    cy.get("h4[style='text-align: left;']").should('have.text', 'Your cart is currently empty')
})