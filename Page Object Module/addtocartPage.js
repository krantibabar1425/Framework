import generalUtilities from "../utilities/generalUtitilities"
import data from "../testdata/data.json"
export default class addtoCart{
    constructor(page)
    {
        this.utilities=new generalUtilities(page)
        this.page=page
        this.name=page.locator("#giftcard_1_RecipientName")
        this.remail=page.locator("#giftcard_1_RecipientEmail")
        this.addtocartButton=page.locator('//input[@value="Add to cart"]').first()
        
    }
    async enterName(){
        await this.utilities.fillTextfield(this.name,data.Recipient.recipientname)
    }
    async entermail(){
        await this.utilities.fillTextfield(this.remail,data.Recipient.recipientemail)
    }
    async clickOnAddtoCart(){
        await this.utilities.clickElement(this.addtocartButton)
    }
}