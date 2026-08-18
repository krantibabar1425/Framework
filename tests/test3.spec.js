import {test,expect} from "../custom fixtures/loginpage"
import POMManager from "../pom Manager/pomManager"

import  data from "../testdata/data.json"
test.beforeEach(async({page,loginfixture})=>{
})
test("test3",async({page,loginfixture})=>{
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
})

test.afterEach(async({logoutfixture,page})=>{

})

// //test.afterAll(async({page})=>{
//     await page.close()
// })