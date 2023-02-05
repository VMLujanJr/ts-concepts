let my1stDecimal: number; // declare type as number
let my2ndDecimal: number; // declare type as number

my1stDecimal = 4.6;
console.log(my1stDecimal);
my2ndDecimal = 5.00994302;
console.log(my2ndDecimal);

console.log(my1stDecimal + my2ndDecimal);

let message: string = 'Hello World';
console.log(message); // log the variable 'message'

let message1: string = 'two';
console.log(message1);

let message2: string = 'Hello World';
console.log(message2);

let message3: string = 'new message';
console.log(message3);

let message4: number = 12345;
console.log(message4);

let multiType: number | boolean | string;
multiType = 20;         //* Valid
console.log(multiType);
multiType = true;       //* Valid
console.log(multiType);
multiType = "twenty";   //* Invalid
console.log(multiType);

// What is an INTERFACE?
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = { // add a ruleset
    firstName: 'Emil',
    lastName: 'Andersson',
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
console.log(employee); // Emil Anderson
employee.firstName = 'Victor';
console.log(employee); // Victor Anderson

// What is a TYPE?
type Employees = {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employees: Employees = {
    firstName: 'Victor',
    lastName: 'Lujan',
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
}

console.log(employees, "before"); // Victor Lujan
employees.firstName = 'Keith';
console.log(employees, "after"); // Keith Lujan

interface Employer {
    firstName: string;
    lastName: string;
    fullName(): string;
    companyName?: string; // Optional property type, add question mark
    readonly mothersName: string; // should only be modified when an obj is 1st created
}

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
};

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry'; // sauce of literal type...
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
};

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 3,
    sauce: 'caramel',
    nuts: true
    // instructions: 'Do not add more than 4 scoops.',
};

console.log(myIceCream);
console.log(myIceCream.flavor);
console.log(myIceCream.scoops);

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'chocolate', nuts: false /* instructions: 'Do not add more than 5 scoops!' */ }));
console.log(tooManyScoops({ flavor: 'chocolate', scoops: 3, sauce: 'strawberry' }));

interface IceCreamArray {
    [index: number]: string;
}

let myIceCream1: IceCreamArray;

myIceCream1 = [
    'chocolate',
    'vanilla',
    'strawberry',
];

let myStr: string = myIceCream1[0];
console.log(myStr); // returns 'chocolate'

// const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

// // Interface describing the shape of our json data
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// async function fetchPosts(url: string) {
//     let response = await fetch(url);
//     let body = await response.json();
//     return body as Post[];
// }

// async function showPost() {
//     let posts = await fetchPosts(fetchURL);
//     // Display the contents of the first item in the response
//     let post = posts[0];
//     console.log('Post #' + post.id);
//     // If the userId is 1, then display a note that it's an administrator
//     console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()))

//     /* if (post.userId === 1) {
//         return 'Administrator';
//     } else {
//         return post.userId.toString();
//     } */

//     console.log('Title: ' + post.title);
//     console.log('Body: ' + post.body);
// }

// showPost();

/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principal: number, // $10,000 Loan Amount
    interestRate: number, // 3.5 Interest Rate Percentage
};

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number, // Total number of months
};

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
};

/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
};

// let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
// console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 

// let conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
// console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"

// hoisted
function addNumbers(x: number, y: number): number { // returns a 'number'
    return x + y;
}
console.log(addNumbers(1, 2));

// not hoisted
let subtractNumbers = function (x: number, y: number): number { // function expression (aka anonymous function) isn't hoisted
    return x - y;
};

console.log(subtractNumbers(1, 3));

let sum = function (input: number[]): number { // function expression
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3]));

// Anonymous function
let addNumbers2 = function (x: number, y: number): number {
    return x + y;
}

// Single-Line Arrow function / shorthand for anonymous function
let addNumbers3 = (x: number, y: number): number => x + y; // uses CONCISE BODY SYNTAX or IMPLICIT RETURN

// Multi-Line Arrow function
let total2 = (input: number[]): number => {
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};

// Reference Error: alert is not defined
// function displayAlert(message: string){
//     alert('The message is ' + message);
// };

// console.log(displayAlert('clear. Shoot down the CN balloon.'));

function sum1000(input: number[]): number {
    let total: number = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
};

console.log(sum1000([5, 3, 3, 4]));
console.log('HELLO!');

function addNumbers1(x: number, y: number): number {
    return x + y;
}

addNumbers1(1, 2); // Returns 3
// addNumbers1(1);    // Returns an error

function addNumbers4(x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers4(1, 2); // Returns 3
addNumbers4(1);    // Returns 1

function addNumbers5(x: number, y = 25): number {
    return x + y;
}

console.log(addNumbers5(1, 2));  // Returns 3
console.log(addNumbers5(1));     // Returns 26

// This is an ellipsis ... <-- the three dots
let addAllNumber = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};

console.log(addAllNumber(1, 2, 3, 4, 5, 6, 7)); // returns 28
console.log(addAllNumber(2)); // returns 2
// console.log(addAllNumber(2, 3, "three")); // flags error

interface Message {
    text: string;
    sender: string;
};

function displayMessage({ text, sender }: Message) {
    console.log(`Message from ${sender}: ${text}`);
};

displayMessage({ sender: 'Victor', text: 'Hello. Good morning.' });

// Required Parameters
let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if (z === undefined) {
        return x + y;
    } else {
        return x + y + z;
    }
};

console.log(addThreeNumbers(10, 20));
console.log(addThreeNumbers(10, 20, 30));
// console.log(addThreeNumbers(10, 20, 30, 40));

// Default parameters
// Arrow function
let subtractNumberss = (x: number, y: number, z = 100): number => x - y - z;

console.log(subtractNumberss(10, 20, 30));
console.log(subtractNumberss(10, 20));

// Type alias
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

// two arrow functions
let addNumbersss: Calculator = (x: number, y: number): number => x + y;
let subtractNumbersss: Calculator = (x: number, y: number): number => x - y;

console.log(addNumbersss(1, 2), "NOT THIS ONE...");
console.log(subtractNumbersss(1, 2), "NOT THIS ONE...");

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumbersss;
    } else {
        return subtractNumbersss;
    }
};

console.log(doCalculation('add')(10, 50), "This is my calculation");

let addNumber10: Calculator = (x: number, y: number): number => x + y;
let addNumber11: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumber12: Calculator = (num1, num2) => num1 + num2;

/* Module 4: Develop typed functions using TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
interface Sort {
    (a: number, b: number): number;
}

/*  TODO: Convert the sortDescending and sortAscending functions to arrow 
    functions. */

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */
let sortDescending: Sort = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */
let sortAscending: Sort = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
};

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number; // 50
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
};

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');

/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */
// type Loan = (principal: number, interestRate: number, months: number) => number;
interface Loans {
    (principal: number, interestRate: number, months?: number): string;
};

let loanCalculator: Loans = (principal, interestRate, months = 12) => {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate
    let payment: number;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
};

let myLoan = loanCalculator(1000, 5, 3);
console.log(myLoan, "THIS IS MY LOAN!");