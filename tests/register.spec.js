import {test} from "@playwright/test";
import data from "../testdata/data.json"

import POMManager from "../pom Manager/pomManager.js";

import {readExcelData} from "../utilities/excelUtility.js";

let page;
test.beforeAll(async({browser})=>{
  page=  await browser.newPage()
  await page.goto(data.URL.url)}
)
  
  test("Register User",async({})=>{
const pom=new POMManager(page);
const register=pom.getregisterexcel();
await pom.getWelcomePage().clickOnRegister()
const firstName=await readExcelData("./testData/registrationdata.xlsx","sheet1",2, 2);
const lastName=await readExcelData("./testData/registrationdata.xlsx","sheet1",3,2);
const email=await readExcelData("./testData/registrationdata.xlsx","sheet1",4,2);
const password=await readExcelData("./testData/registrationdata.xlsx","sheet1",5,2);
const confirmPassword=await readExcelData( "./testData/registrationdata.xlsx","sheet1",6,2);
await register.registerUser(firstName, lastName, email,password,confirmPassword);
});

test.afterAll(async()=>{
    await page.close()
})