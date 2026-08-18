

import { test as base ,expect} from "@playwright/test";
import POMManager from "../pom Manager/pomManager.js";
import data from "../testdata/data.json";

export const test = base.extend({
  'loginfixture': async ({ page},use ) => {
    const pom = new POMManager(page);
    const login = pom.getloginPage();

    await login.navigateToHomePage();
    await login.clickOnLogin();
    await login.enterEmailId(data.user.email);
    await login.enterPassword(data.user.password);
    await login.clickOnLoginBtn();
    await expect(page.getByRole('link', { name: 'v09@gmail.com' })).toContainText("v09@gmail.com")

    await use();


  },


'logoutfixture':async({page,loginfixture},use)=>{
    await use()
    const pom=new POMManager(page)
    const Logout=pom.getlogoutPage()
    await Logout.clickOnLogout()
    
    await expect(page.locator(".ico-login")).toHaveText("Log in")
    


    }

})



