import {expect, test} from "@playwright/test"
import welcomePage from "../Page Object Module/welcomePage.js"
import registerPage from "../Page Object Module/registerPage.js"
import loginPage from "../Page Object Module/loginPage.js"
import giftcardsPage from "../Page Object Module/giftcardsPage.js"
import clickProduct from "../Page Object Module/clickProduct.js"
import addtocartPage from "../Page Object Module/addtocartPage.js"
import shoppingCartPage from "../Page Object Module/shoppingCartPage.js"
import logoutPage from "../Page Object Module/logoutPage.js"
import POMManager from "../pom Manager/pomManager.js"
import loginfixture from "../custom fixtures/loginpage.js"


test("demo web shop",async({page},testInfo)=>{
    const welcome=new welcomePage(page)
    const register=new registerPage(page)
    const login=new loginPage(page)
    const giftCard=new giftcardsPage(page)
    const Product=new clickProduct(page)
    const cart=new addtocartPage(page)
    const listofCart=new shoppingCartPage(page)
    const logout=new logoutPage(page)

    await welcome.navigationToHomePage()
    const screenshotPath = "Screenshots/Homepage.png";

await page.screenshot({
  path: screenshotPath,
  fullPage: true,
});

await testInfo.attach("Homepage", {
  path: screenshotPath,
  contentType: "image/png",
});
    await welcome.clickOnRegister()


    //registration
    await register.clickOnGender()
    await register.enterFirstname()
    await register.enterLastName()
    await register.enterEmail()
    await register.enterPassword()
    await register.enterConfirmPassword()
    await register.clickOnRegisterButton()
    //await expect(page.locator(".result")).toHaveText('Your registration completed')

    //login
    await login.clickOnLogin()
    await login.enterEmailId()
    await login.enterPassword()
    await login.clickOnLoginBtn()
    await expect(page.getByRole('link', { name: 'v09@gmail.com' })).toContainText("v09@gmail.com")

    //clicking on giftcards option
    await giftCard.clickOnGiftCard()
    await expect(page.locator('.current-item')).toHaveText("Gift Cards")

    //clicking on product 
    await Product.clickOnProduct()
    await expect(page.locator('#add-to-cart-button-1').first()).toBeVisible()
    //adding product to cart
    await cart.enterName()
    await cart.entermail()
    await cart.clickOnAddtoCart()
    await expect (page.locator('.content')).toContainText("The product has been added to your ")

    //list of cart
    await listofCart.clickOnShoppingCartButton()
    await expect(page.locator(".product-name").first()).toContainText("$5 Virtual Gift Card")
    //logout
    await logout.clickOnLogout()
    await expect(page.locator(".ico-login")).toHaveText("Log in")

    
})
