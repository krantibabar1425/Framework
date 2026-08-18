import generalUtilities from "../utilities/generalUtitilities"
import data from "../testdata/data.json"
export default class register{
     constructor(page){
        this.utilities=new generalUtilities(page)
       
        this.gender=page.locator("#gender-female")
        this.firstnameTextfield=page.locator("#FirstName")
        this.lastnameTextfield=page.locator("#LastName")
        this.email=page.locator("#Email")
        this.password=page.locator("#Password")
        this.confirmPassword=page.locator("#ConfirmPassword")
        this.register=page.locator("#register-button")
    }
    async clickOnGender(){
        await this.utilities.clickElement(this.gender)
    }
    async enterFirstname(){
        await this.utilities.fillTextfield(this.firstnameTextfield,data.user.firstname)
    }
    async enterLastName(){
        await this.utilities.fillTextfield(this.lastnameTextfield,data.user.lastname)
    }
    async enterEmail(){
        await this.utilities.fillTextfield(this.email,data.user.email)
    }
    async enterPassword(){
        await this.utilities.fillTextfield(this.password,data.user.password)
    }
    async enterConfirmPassword(){
        await this.utilities.fillTextfield(this.confirmPassword,data.user.confirmPass)
    }
    async clickOnRegisterButton(){
        await this.utilities.clickElement(this.register)
    }
}