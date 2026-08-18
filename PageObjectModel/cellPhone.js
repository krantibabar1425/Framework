import GeneralUtilities from "../utility/GenerealUtility"


export default class CellPhone{

constructor(page){
this.generalUtilities=new GeneralUtilities(page)
this.page=page
this.cell=page.locator('//a[@href="/cell-phones"]').first()

}


async clickOnCellPhone(){

await this.generalUtilities.clickOnElement(this.cell)

}


}