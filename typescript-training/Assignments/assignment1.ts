//1. Temperature of a city in degrees Celsius: 25.5

let temperature:number=25.5;
console.log(`Temperature of a city is ${temperature} degree Celsius`);

//2. Whether a customer has placed an order: true or false

let status:boolean=true;
let orderMessage:string=(status) ? "Customer has placed an Order":"Customer hasnt placed an order";
console.log(orderMessage);

//3. Person's phone number: "123-456-7890"

let phno:string="123-456-7890";
console.log(`Person's phone number is ${phno}`);

//4. Amount of money in a customer's bank account: 1000.50

let accountBalance:number=1000.50;
console.log(`Amount of money in a customer's bank account is ${accountBalance}`);

//5. Person's email address: "john.doe@example.com"

let emailId:string="john.doe@example.com";
console.log(`Persons email address is: ${emailId}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
interface coordinates1{
    "latitude":number,
    "longitude":number
}
let coordinates:coordinates1={
    "latitude":37.7749,
    "longitude":-122.4194
}
console.log(coordinates);

//7. Person's marital status: true or false

let marital_status:boolean=true;
let maritalstatus:string=(status) ? "Person marrital status is true":"Person marrital status is false";
console.log(maritalstatus);

//8. Person's occupation: "Software Engineer"

let role:string="Software Engineer";
console.log(`Persons occupation is ${role}`);

//9. Person's favourite colour: "Blue"

let favouritecolour:string="Blue";
console.log(`Persons favourite colour is ${favouritecolour}`);

//10.Current year: 2023

let currentYear: number = new Date().getFullYear();
console.log(`Currentt year is ` + currentYear);

//11.Number of followers on a social media platform: 1,000,000

let noOfFollowers:number=1000000;
console.log(`Number of followers on a social media platform is `+noOfFollowers);

//12.Rating of a movie: 7.5

let rating:number=7.5;
console.log(`Rating of a movie is ${rating}`);

//13.Person's blood type: 'A'

let bloodType:string='A';
console.log(`Persons blood type is ${bloodType}`);

//14.Title of a book: "To Kill a Mockingbird"

let title:string="To Kill a Mockingbird";
console.log(`Title of a book is `+ title);

//15.Number of employees in a company: 500

let noOfEmp:number=500;
console.log(`Number of employees in a company is `+ noOfEmp);

//16.Time of an event: 2:30 PM

let event_time:string="2:30 PM";
console.log(`Time of an Event is ${event_time}`);

//17.Name of a country: "United States"

let countryName:string="United States";
console.log("Name of a country is "+ countryName);

//18.Person's eye color: "Brown"

let eyecolour:string="Brown";
console.log("Persons eye color is "+ eyecolour);

//19.Person's birthplace: "New York City"
let birthPlace="New York City";
console.log(`Persons birth place is ${birthPlace}`);

//20. Distance between two cities: 200.5

let distance:number=200.5;
console.log(`Distance between two cities is ${distance}`);