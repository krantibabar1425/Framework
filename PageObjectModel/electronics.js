
import GeneralUtilities from "../utility/GenerealUtility";

 export default class Electronics{


constructor(page){
    
this.generalutilities=new GeneralUtilities(page)
this.page=page
this.electronicsItem= page.locator('//a[@href="/electronics"]').first()

}

async clickOnElectronics(){

    await this.generalutilities.clickOnElement(this.electronicsItem)
}









}