import GeneralUtilities from "../utility/GenerealUtility"
import data from "../testData/data.json"

export default class WelcomePage{


constructor(page){

this.generalUtilities=new GeneralUtilities(page)
this.page=page
this.registration=page.getByRole("link",{name:"Register"})



}

async navigateToHomePage(){

    await this.generalUtilities.navigation()
}

async clickOnRegistration(){

    await this.generalUtilities.clickOnElement(this.registration)

}

}
