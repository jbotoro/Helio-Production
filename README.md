# Helio-Live

[Live Link](https://helio-live.herokuapp.com/) . 
  
    
    
![alt text](https://github.com/jbotoro/markdown_images/blob/master/splash_page.png)


## Overview

Helio-live is a ecommerce web application, the goal was to create a lightweight online store utilizing some new technologies / frameworks like GraphQL, Firebase, Redux Hooks & Sagas, and the Stripe payment API


## Technologies 
 
#### Backend
  * Firebase
  * Node/Express
  * GraphQL/Apollo
  
#### Frontend
  * React / Redux
  * JavaScript
  * Styled Components
  * HTML5
  * CSS3
  
## Features
 
#### Users Auth
   * Users can create and sign in with a unique username and password
   * Users can login with Google account via Firebase or with Email
   
   ![loginwithGoogle](https://github.com/jbotoro/markdown_images/blob/master/googleLoginHelio.gif)
   
   * Users cart and cartItems persist if user logged in.
   * Redux-persist used to ensure that state stays the same even on refresh
   
   
 
#### Main Page & NavBar
   * All subsections of store listed on splash page (i.e. hats show page, jackets page etc...). 
     
     
   ![featuredListSplash](https://github.com/jbotoro/markdown_images/blob/master/splash_page.png)
   * NavBar has cartIcon and cart Dropdown list, cartIcon updates with number of items in cart . 
   ![cartItemsNavbar](https://github.com/jbotoro/markdown_images/blob/master/cart_icon.png)
   ![cartDropdown](https://github.com/jbotoro/markdown_images/blob/master/cart_dropdown.png)
   
   
#### Browse clothing by collection type

  * All clothes can be browse via collection type (i.e. hats show page displays all hats, jackets show page displays all jackets etc..) for easy and convenient browsing
  
  ![featuredBrowsing](https://github.com/jbotoro/markdown_images/blob/master/featuredbrowsinghelio.gif)
  
     
     
#### Checkout Page  
 

   * All items added to cart are shown in checkout page, users able to change quantity of items or remove items all together  from the cart on the checkout page 
     
     
   ![checkoutPageButtons](https://github.com/jbotoro/markdown_images/blob/master/checkout_screen.png) . 
   
     
     
   * Stripe API used to handle payments, users given sample credit card information to test Stripe payment 
     
     
   ![stripePayment](https://github.com/jbotoro/markdown_images/blob/master/stripe_checkout.png)

