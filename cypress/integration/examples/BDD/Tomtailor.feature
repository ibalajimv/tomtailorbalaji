Feature: Add and remove in cart 


    Adding a product to cart

     Scenario: Add a product to cart
    Given Open the Product List Page and click any product
    When Select the colour and size of the product and click add to cart
    When Navigate to the cart
    Then The added product should display in the Cart with same colour, size and count


     Scenario: Remove a product from cart
     Given Open the Cart in which product is available
     When Remove the product from cart
     Then The product should be removed from cart

