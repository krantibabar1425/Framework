import generalUtilities from "../utilities/generalUtitilities";
export default class clickProduct{
    constructor(page){
        this.utilities=new generalUtilities(page)
        this.page=page
        this.product=page.getByRole('link', { name: '$5 Virtual Gift Card', exact: true })
    }
    async clickOnProduct(){
        await this.utilities.clickElement(this.product)
    }
}