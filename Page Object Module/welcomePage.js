import generalUtilities from "../utilities/generalUtitilities";
import data from "../testdata/data.json"

export default class WelcomePage{
    constructor(page){
        
        this.utilities=new generalUtilities(page)
        this.page=page
        this.registerButton=page.getByRole('link',{name:"Register"})
    }
    async navigationToHomePage(){
        await this.utilities.navigateTo()
    }
    async clickOnRegister(){
        await this.utilities.clickElement(this.registerButton)
    }
}