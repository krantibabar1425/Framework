import {test} from "../custom fixtures/loginpage.js"
import { expect } from "@playwright/test"
import POMManager from "../pom Manager/pomManager"

test("test1", async({page,loginfixture,logoutfixture})=>{
    const pom= new POMManager(page)
    //navigating to giftcards page
    await pom.getgiftcardsPage().clickOnGiftCard()
     await expect(page.locator('.current-item')).toHaveText("Gift Cards")

    //navigating to product
    await pom.getclickProduct().clickOnProduct()
     await expect(page.locator('#add-to-cart-button-1').first()).toBeVisible()
    //adding product to cart
    await pom.getaddtoCart().enterName()
    await pom.getaddtoCart().entermail()
    await pom.getaddtoCart().clickOnAddtoCart()
    await expect (page.locator('.content')).toContainText("The product has been added to your ")
    
    //opening list of cart
    await pom.getshoppingCartPage().clickOnShoppingCartButton()
    //await expect(page.locator(".product-name").first()).toContainText("$5 Virtual Gift Card")
    //await page.pause()








})