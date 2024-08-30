import homePage from "../PageObjects/homepage";

describe('E-Commerce Web App Smoke Testing', () => {

  before(() => 
  {
          
    cy.fixture("homepage").then((page_data) => {
    const test = new homePage()

    // Visit website
    cy.log("Visit website")
    test.visitPageURL(page_data.url)

    })    
  });

  it("Add to cart and checkout", {retries: 2}, () => 
  {
          
    cy.fixture("homepage").then((page_data) => {
    const test = new homePage()

    // Locate search box and search for product
    cy.log("Locate search box and search for product");
    test.searchBox(page_data.productName)
    test.clickSearchBtn()

    // Add product to cart
    cy.log("Add Product to cart")
    test.selectProduct()
    test.addProductToCart(page_data.addToCartBtnLbl)
    cy.wait(2000)

    // Proceed to checkout
    cy.log("Proceed to checkout")
    test.clickCart()
    test.clickCheckOut()
    test.validateLoginPage(page_data.loginPageMsg)

    })
  })
});