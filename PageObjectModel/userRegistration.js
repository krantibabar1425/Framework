
import data from "../testData/data.json"
import GeneralUtilities from "../utility/GenerealUtility"

export default class UserRegistration{


constructor(page){
    
    this.generalUtility=new GeneralUtilities(page)
    this.page=page
    this.gender=page.locator("//input[@id='gender-male']")
    this.firstName=page.locator("//input[@id='FirstName']")
    this.lastName=page.locator("//input[@id='LastName']")
    this.email=page.locator("//input[@id='Email']")
    this.password=page.locator("//input[@id='Password']")
    this.confirmPass=page.locator("//input[@id='ConfirmPassword']")
    this.registerBTN=page.locator("//input[@id='register-button']")
    
}

async clickOnGender(){

    await this.generalUtility.clickOnElement(this.gender)
}

async EnterFirstName(){

    await this.generalUtility.FillTheTextBox(this.firstName,data.userData.firstname)
}

async EnterLastName(){

    await this.generalUtility.FillTheTextBox(this.lastName,data.userData.lastname)
}

async EnterEmail(){

    await this.generalUtility.FillTheTextBox(this.email,data.userData.email)
}

async EnterPassword(){

    await this.generalUtility.FillTheTextBox(this.password,data.userData.password)
}

async EnterConfirmPassword(){
    await this.generalUtility.FillTheTextBox(this.confirmPass,data.userData.confirmPass)
}

async clickOnRegisterBtn(){
    await this.generalUtility.clickOnElement(this.registerBTN)
}



}