<html><h2>API Automation Tests to validate API responses</h2>
<li><strong> Set up </strong> - Initialize an Playwright project using npm init playwright</li>
<li><strong> Goal </strong> - Design Automated API Tests to validate different API requests</li>
<li><strong> Language </strong> - javascript </li>
<li><strong> Steps: </strong> </li>
 <ol>
   <li> Login to the application using url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login </li>
  <li> Validate successful Login</li>
  <li> Create a new Employee </li>
  <li> Set Employee as Admin User </li>
  <li>  Search for User</li>
  <li> Delete newly added user</li>
   </ol>
<li><strong> Project Structure </strong> - Page Object Model is used to organize different pages as different classes </li>
 <li><strong> Different page classes are mentioned below: </strong> </li>
  <ol> 
  <li> LoginPage.js </li>
  <li> EmployeePage.js </li>
 <li> AdminPage.js </li>
  </ol>
 <li><strong> Automation Tests </strong> - includes assertions to validate different user workflow functionality in file: Orangehrm.spec.js </li>
</html>


