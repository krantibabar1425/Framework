import GeneralUtilities from "../utility/GenerealUtility"
import data from "../testData/data.json"

export default class Login {

constructor(page){

this.generalUtilities=new GeneralUtilities(page)
this.page=page
this.login=page.getByRole("link",{name:"Log in"})            
this.email=page.locator("//input[@id='Email']")
this.pass=page.locator("//input[@id='Password']")
this.loginBtn=page.locator("//input[@value='Log in']")
 


}




async clickOnLogin(){

    await this.generalUtilities.clickOnElement(this.login)
}

async EnterEmail(){
    await this.generalUtilities.FillTheTextBox(this.email,data.userData.email)
}

async EnterPassword(){

    await this.generalUtilities.FillTheTextBox(this.pass,data.userData.password)
}


async clickOnLoginBtn(){
    await this.generalUtilities.clickOnElement(this.loginBtn)
}


}