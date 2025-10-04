import { test,expect } from '@playwright/test'
import { loginPage } from '../Pages/LoginPage'
import { adminPage } from '../Pages/AdminPage'
import {employeePage} from '../Pages/EmployeePage'


//Test to Login to application
test('Tests to validate different functionality on Orange HRM Demo application', async({page}) =>{

const login1 =new loginPage(page)
await login1.gotologin()
console.log("============================================")
console.log("Test to Suceessfully Login to application")
console.log("============================================")
await login1.logintoApplication('Admin','admin123')
await page.waitForTimeout(1000)
//}
//)
//Test to add new Employee
const emp1 =new employeePage(page)
console.log("============================================")
console.log("Test to add New Employee")
console.log("============================================")
await emp1.addEmployee('Kaila','Seth','8989')
await page.waitForTimeout(1000)

//Test to add Admin User

const admin1 =new adminPage(page)
//
console.log("============================================")
console.log("Test to Add a new admin user")
console.log("============================================")
await page.waitForTimeout(1000)
await admin1.addAdminUser('ESS','Enabled','Kaila Seth','admin2','Test123')
await page.waitForTimeout(3000)

//Test to Validate search for new user
console.log("============================================")
console.log("Validate Search of newly created admin user")
console.log("============================================")
await admin1.validateAdminUser('admin2','Kaila Seth')
//await page.waitForTimeout(3000)

//Test to delete  created admin user
console.log("============================================")
console.log("Delete newly created admin user")
console.log("============================================")
await admin1.deleteAdminUser('admin2','Kaila Seth')

}
)
