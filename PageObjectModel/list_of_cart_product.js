
import GeneralUtilities from "../utility/GenerealUtility";

export default class CartList{


constructor(page){

    this.generalutilities=new GeneralUtilities(page)
    this.page=page
    this.shoppingcart=page.getByText("Shopping cart").first()

}

async shoppingCartList(){

    await this.generalutilities.clickOnElement(this.shoppingcart)
}



}

