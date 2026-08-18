import generalUtilities from "../utilities/generalUtitilities.js";

export default class registerexcel {

    constructor(page){

        this.utilities=new generalUtilities(page);
        this.registerButton=page.getByRole('link',{name:"Register"})
        this.gender=page.locator("#gender-female");
        this.firstname=page.locator("#FirstName");
        this.lastname=page.locator("#LastName");
        this.email=page.locator("#Email");
        this.password=page.locator("#Password");
        this.confirmPassword=page.locator("#ConfirmPassword");
        this.registerButton=page.locator("#register-button");
    }
    async navigationToHomePage(){
        await this.utilities.navigateTo()
    }
    async clickOnRegister(){
        await this.utilities.clickElement(this.registerButton)
    }

    async registerUser(firstName,lastName,email,password,confirmPassword){

        await this.utilities.clickElement(this.gender);

        await this.utilities.fillTextfield(this.firstname,firstName);

        await this.utilities.fillTextfield(this.lastname,lastName);

        await this.utilities.fillTextfield(this.email,email);

        await this.utilities.fillTextfield(this.password,password);

        await this.utilities.fillTextfield(this.confirmPassword,confirmPassword);

        await this.utilities.clickElement(this.registerButton);
    }

}