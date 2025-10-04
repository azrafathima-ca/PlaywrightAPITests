exports.adminPage = 
class adminPage 
{

constructor(page) {

    this.page =page
    this.adminitem ="//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a"
    this.adduserbutton="//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button"
    this.urole= "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]"
    this.ustatus= "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div"
    this.ename = "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input"
    this.ausername="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input"
    this.apassword="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input"
    this.cpassword ="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input"
    this.asave ="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]"
    this.searchusername="//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input"
    this.searchempname="//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/input"
}

async gotoAdminPage()
{

await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser")


}

async addAdminUser(userrole,userstatus,empname,adminusername,adminpassword)
{

await this.page.locator(this.adminitem).click()

await this.page.locator(this.adduserbutton).click()


await this.page.locator(this.ename).click()
await this.page.locator(this.ename).fill(empname)
await this.page.waitForTimeout(500)
await this.page.locator("//span[contains(text(),'Kaila')]").click()
await this.page.locator(this.ausername).fill(adminusername)
await this.page.locator(this.apassword).fill(adminpassword)
await this.page.locator(this.cpassword).fill(adminpassword)




await this.page.locator(this.urole).click()
await this.page.waitForTimeout(500)
const selectionurole = await this.page.$$("//div[@role='listbox']//span")
for (let selecturole of selectionurole)
{
let texturole = await selecturole.textContent()
console.log(await selecturole.textContent() );

 if(userrole === selecturole.textContent())
{
    await selecturole.click()
    await this.page.waitForTimeout(1000)
    break;
}
}
await this.page.locator("//span[text()='ESS']").click()
await this.page.waitForTimeout(1000)


await this.page.locator(this.ustatus).click()
await this.page.waitForTimeout(1000)
const selectionustatus =await this.page.$$("//div[@role='listbox']//span")
for (let selectustatus of selectionustatus)
{
    let textustatus =selectustatus.textContent()
    console.log(selectustatus.textContent());
    if (userstatus === selectustatus.textContent())
    {
    selectustatus.click()
        break;
    }


}


await this.page.locator("//span[text()='Enabled']").click()
await this.page.waitForTimeout(1000)
await this.page.locator(this.asave).click()
}

async validateAdminUser(adminusername,empname)
{
await this.page.waitForTimeout(3000)
await this.page.locator(this.adminitem).click()
await this.page.locator(this.searchusername).click()
await this.page.locator(this.searchusername).fill(adminusername)
await this.page.locator(this.searchempname).click()
await this.page.locator(this.searchempname).fill(empname)
await this.page.waitForTimeout(500)
await this.page.locator("//span[contains(text(),'Kaila')]").click()
await this.page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]").click()

//await this.page.locator("//span[normalize-space()='(1) Record Found']"
await this.page.locator("//span[normalize-space()='(1) Record Found']").click()
await this.page.check("//div[@class='oxd-table-card-cell-checkbox']//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']")

await this.page.locator("//div[contains(text(),'Kaila Seth')]").click()
  const searchvalue = await this.page.locator("//div[contains(text(),'Kaila Seth')]").textContent()

     console.log(searchvalue)


//}
if(searchvalue ==empname) 
{
    console.log("Found newly added Admin user:", empname)
}
else
{
    console.log("Admin user not found")
}

}
// function to delete newly created admin user

async deleteAdminUser(adminusername,empname)
{


await this.page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div").click()
  const asearchvalue = await this.page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div").textContent()

     console.log(asearchvalue)


if(asearchvalue ==adminusername) 
{
    console.log("Deleting newly added Admin user:", adminusername)
    await this.page.locator("//i[@class='oxd-icon bi-trash']").click()
   await this.page.locator( "//button[normalize-space()='Yes, Delete']").click()
   await this.page.waitForTimeout(1000)
   await this.page.locator("//span[normalize-space()='No Records Found']").click()
    console.log("Deleted newly added Admin user:", adminusername)
}

else{

    console.log("admin user cannot be deleted")
}


}
    
}