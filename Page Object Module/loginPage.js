import generalUtilities from "../utilities/generalUtitilities"
import data from "../testdata/data.json"
export default class loginPage{
    constructor(page)
    {
        this.utilities=new generalUtilities(page)
        this.page=page
    this.loginButton=page.getByRole('link',{name:'Log in'})
    this.emailTextfield=page.locator("#Email")
    this.passwordTextfield=page.locator("#Password")
    this.login=page.getByRole('button',{name:'Log in'})
    }
    async navigateToHomePage(){
        await this.utilities.navigateTo()
    }
    async clickOnLogin(){
        await this.utilities.clickElement(this.loginButton)
    }
    async enterEmailId(){
        await this.utilities.fillTextfield(this.emailTextfield,data.user.email)
    }
    async enterPassword(){
        await this.utilities.fillTextfield(this.passwordTextfield,data.user.password)
    }
    async clickOnLoginBtn(){
        await this.utilities.clickElement(this.login)
    }
}
