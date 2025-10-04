exports.employeePage =
class employeePage{


    constructor(page){
        this.page=page
        this.PIMitem ="//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span"
        this.addemployeebutton="//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button"
        this.eFirstname ="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input"
        this.eLastname ="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input"
        this.eNumber ="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input"
        this.esave = "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]"
    }

async addEmployee(empfirstname,emplastname,empnumber)
{
await this.page.locator(this.PIMitem).click()
await this.page.waitForTimeout(500)
await this.page.locator(this.addemployeebutton).click()

await this.page.waitForTimeout(500)
await this.page.locator(this.eFirstname).click()
await this.page.locator(this.eFirstname).fill(empfirstname)

await this.page.locator(this.eLastname).click()
await this.page.locator(this.eLastname).fill(emplastname)
await this.page.locator(this.eNumber).click()
await this.page.locator(this.eNumber).fill(empnumber)
await this.page.locator(this.esave).click()
await this.page.waitForTimeout(500)






}






}