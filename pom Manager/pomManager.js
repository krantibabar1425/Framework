import WelcomePage from "../Page Object Module/welcomePage";
import register from "../Page Object Module/registerPage";
import loginPage from "../Page Object Module/loginPage";
import giftcardsPage  from "../Page Object Module/giftcardsPage";
import clickProduct from "../Page Object Module/clickProduct";
import addtoCart from "../Page Object Module/addtocartPage";
import shoppingCartPage from "../Page Object Module/shoppingCartPage";
import logoutPage from "../Page Object Module/logoutPage";
import registerexcel from "../Page Object Module/registerexcel"
export default class POMManager{
    constructor(page){
        this.page=page
        this.welcome=new WelcomePage(page)
        this.register=new register(page)
        this.login=new loginPage(page)
        this.giftCard=new giftcardsPage(page)
        this.product=new clickProduct(page)
        this.cart=new addtoCart(page)
        this.listOfcart=new shoppingCartPage(page)
        this.logout=new logoutPage(page)
        this.rexcel=new registerexcel(page)
    }
 getWelcomePage(){
    return this.welcome;
 }
 getregister(){
    return this.register;
 }
 getloginPage(){
    return this.login;
 }
 getgiftcardsPage(){
    return this.giftCard;
 }
 getclickProduct(){
    return this.product;
 }
 getaddtoCart(){
    return this.cart;
 }
 getshoppingCartPage(){
    return this.listOfcart;
 }
 getlogoutPage(){
    return this.logout; 
 }
 getregisterexcel(){
   return this.rexcel;
 }


}
