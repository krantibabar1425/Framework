import generalUtilities from "../utilities/generalUtitilities";
export default class shoppingCartPage{
    constructor(page){
        this.page=page
        this.utilities=new generalUtilities(page)
       this.shoppingcart=page.locator('.cart-label').first()
    }
    async clickOnShoppingCartButton(){
        await this.utilities.clickElement(this.shoppingcart)
    }
}

