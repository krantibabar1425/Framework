import {test} from '@playwright/test'
import WelcomePage from '../PageObjectModel/welcomePage'
import UserRegistration from '../PageObjectModel/userRegistration'
import Electronics from '../PageObjectModel/electronics'
import Login from '../PageObjectModel/loginPage'
import CellPhone from '../PageObjectModel/cellPhone'
import AddToCart from '../PageObjectModel/addToCart'
import CartList from '../PageObjectModel/list_of_cart_product'

test("demo web shop",async({page})=>{


const welcomepage=new WelcomePage(page)
const userRegistration=new UserRegistration(page)
const electronics=new Electronics(page)
const login=new Login(page)
const cellPhone=new CellPhone(page)
const addtoCart=new AddToCart(page)
const cartList=new CartList(page)


await welcomepage.navigateToHomePage()
await welcomepage.clickOnRegistration()

//registeration
await userRegistration.clickOnGender()
await userRegistration.EnterFirstName()
await userRegistration.EnterLastName()
await userRegistration.EnterEmail()
await userRegistration.EnterPassword()
await userRegistration.EnterConfirmPassword()
await userRegistration.clickOnRegisterBtn()

//login

await login.clickOnLogin()
await login.EnterEmail()
await login.EnterPassword()
await login.clickOnLoginBtn()

//click on electronic itaem and add to cart

await electronics.clickOnElectronics()

//click on cellphone

await cellPhone.clickOnCellPhone()

//add cellphone in cart
await addtoCart.addtoCart()

//list of shopping product
await cartList.shoppingCartList()


await page.pause()

})
