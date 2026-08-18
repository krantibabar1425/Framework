import generalUtilities from "../utilities/generalUtitilities";
export default class logoutPage{
    constructor(page){
        this.utilities=new generalUtilities()
        this.page=page
        this.logoutBtn= page.getByRole('link',{name:'Log out'})
    }
    async clickOnLogout(){
        await this.utilities.clickElement(this.logoutBtn)
    }
}