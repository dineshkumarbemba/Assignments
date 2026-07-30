//Test Case 1: verify the home page.
console.log("******************Test Case1: VERIFY THE HOME PAGE");

logIntoApplication("Chrome","https://icici.com/");

console.log("Verify the home page is displayed or not");

logOuntFromApplication();

//Test Case2: Verify the account balance
console.log("******************Test Case2: VERIFY THE ACCOUNT BALANCE");

logIntoApplication("FireFox","https://icici.com/");

console.log("Verify the home page is displayed");
console.log("Navigate to account balance page");
getAccountBalance();
console.log("verify the account balance is displayed as "+getAccountBalance());

logOuntFromApplication();

function logIntoApplication(browserName,url){
console.log(`Launch the  ${browserName} Browser`);
console.log(`Enter the URL: ${url}`);
console.log("Enter the username as 'Dinesh' and password as 'Dinesh@1993'");
console.log("Click on the login button");
}
function logOuntFromApplication(){
console.log("Logout from the application");
console.log("Close the browser");
}

function getAccountBalance(){
    console.log("Navigate to account balance page");
    let accountBalance=100000;
    return accountBalance;
}