import generalUtilities from "../utilities/generalUtitilities";
export default class giftcardsPage{
    constructor(page){
        this.utilities=new generalUtilities(page)
        this.page=page
        this.giftcardButton=page.locator('//a[@href="/gift-cards"]').first()
    }

    async clickOnGiftCard(){
        await this.utilities.clickElement(this.giftcardButton)
    }
}