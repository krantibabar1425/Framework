
import GeneralUtilities from "../utility/GenerealUtility";

export default class AddToCart{

constructor(page){

this.generalutilities=new GeneralUtilities(page)
this.page=page
this.cart=page.locator("//input[@value='Add to cart']").first()


}

async addtoCart(){

    await this.generalutilities.clickOnElement(this.cart)
}


}