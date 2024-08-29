class homePage
{

    txtBoxSearchBox="#fi-q";
    btnSearch=".btn._prim._md.-mls.-fsh0";
    itmProduct=".img[data-src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/950456/1.jpg?0716']";
    btnAddToCart="#add-to-cart > button";
    linkCart=".-df.-i-ctr.-gy9.-hov-or5.-phs.-fs16";
    btnCheckOut="#jm > main > div > div.col4 > div > article > div.-fs0.-pas.-bt > a";
    txtOnLoginPage='#identification-form > div.ctx-identification.flow-layout > div.center > h2';

    visitPageURL(URL)
    {
        cy.visit(URL);
    }

    searchBox(productName)
    {
        cy.get(this.txtBoxSearchBox).should('be.visible').type(productName);
    }

    clickSearchBtn()
    {
        cy.get(this.btnSearch).should('be.visible').click();
    }

    selectProduct()
    {
        cy.get(this.itmProduct).should("be.visible").click();
    }

    addProductToCart(AddToCartBtnLbl)
    {
        cy.get(this.btnAddToCart).should('have.text', AddToCartBtnLbl).click();
    }

    clickCart()
    {
        cy.get(this.linkCart).should('be.visible').click();
    }

    clickCheckOut()
    {
        cy.get(this.btnCheckOut).should('be.visible').click()
    }

    validateLoginPage(LoginPageMsg)
    {
        cy.get(this.txtOnLoginPage).should('have.text', LoginPageMsg)

    }
    
}
export default homePage;