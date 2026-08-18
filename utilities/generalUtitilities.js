import data from "../testdata/data.json"
export default class generalUtilities {
    constructor(page){
        this.page=page
    }
    async navigateTo(){
        await this.page.goto(data.URL.url)

    }
    async clickElement(element){
        await element.click()

    }
    async fillTextfield(element,input){
    await element.fill(input)
    }
    async hover(element){
        await element.hover()
    }
    async selectOptionByValue(element,option){
        await element.selectOption({value:option})
    }
     async selectOptionByLabel(element,option){
        await element.selectOption({label:option})
    }








}