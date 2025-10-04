![Build Status](https://github.com/azrafathima-ca/PlaywrightAPITests/actions/workflows/playwright.yml/badge.svg)
<html><h2>API Automation Tests to validate API responses</h2>
<li><strong> Set up </strong> - Initialize an Playwright project using npm init playwright</li>
<li><strong> Goal </strong> - Design Automated API Tests to validate different API requests</li>
<li><strong> Language </strong> - javascript </li>
<li><strong> Steps: </strong> </li>
 <ol>
   <li> Access API request using url: https://reqres.in/api/user </li>
  <li> Validate API response code</li>
  <li> Validate API response data content</li>
   </ol>
 <li><strong> Automation Tests </strong> - includes API Tests with assertions to validate different API method requests in file: apitests.spec.js </li>
  <li> Automated API tests are as follows:   </li>
  <ol>
   <li> Test to validate GET API Request to receive a list of users </li>
    <li> Test to validate GET API Request to receive a specific user </li>
      <li> Test to validate POST API Request to create a new user </li>
          <li> Test to validate PUT API Request to update a specific user </li>
            <li> Test to validate PATCH API Request to update a specific user </li>
                <li> Test to validate DELETE API Request to delete a specific user </li>
  </ol>
 <li><strong> Continuous Integration (CI) Testing </strong> - playwright.yml file defines workflow to automate the following: </li>
  <ol>
   <li> Dependency setup </li>
   <li> Browser installation </li>
   <li> Test execution </li>
   <li> Report archiving </li>
</html>


