exports.loginPage =
class loginPage {

constructor(page){
this.page=page
this.loginusername="//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"
this.loginpassword= "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input"
this.loginlink = "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"

}

async gotologin(){
await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}

async logintoApplication(username, password){
await this.page.locator(this.loginusername).fill(username)
await this.page.locator(this.loginpassword).fill(password)
await this.page.locator(this.loginlink).click()
console.log("Login Successful")
}


}