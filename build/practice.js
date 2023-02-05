"use strict";
let my1stDecimal; // declare type as number
let my2ndDecimal; // declare type as number
my1stDecimal = 4.6;
console.log(my1stDecimal);
my2ndDecimal = 5.00994302;
console.log(my2ndDecimal);
console.log(my1stDecimal + my2ndDecimal);
let message = 'Hello World';
console.log(message); // log the variable 'message'
let message1 = 'two';
console.log(message1);
let message2 = 'Hello World';
console.log(message2);
let message3 = 'new message';
console.log(message3);
let message4 = 12345;
console.log(message4);
let multiType;
multiType = 20; //* Valid
console.log(multiType);
multiType = true; //* Valid
console.log(multiType);
multiType = "twenty"; //* Invalid
console.log(multiType);
let employee = {
    firstName: 'Emil',
    lastName: 'Andersson',
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(employee); // Emil Anderson
employee.firstName = 'Victor';
console.log(employee); // Victor Anderson
let employees = {
    firstName: 'Victor',
    lastName: 'Lujan',
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
console.log(employees, "before"); // Victor Lujan
employees.firstName = 'Keith';
console.log(employees, "after"); // Keith Lujan
;
;
let myIceCream = {
    flavor: 'vanilla',
    scoops: 3,
    sauce: 'caramel',
    nuts: true
    // instructions: 'Do not add more than 4 scoops.',
};
console.log(myIceCream);
console.log(myIceCream.flavor);
console.log(myIceCream.scoops);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'chocolate', nuts: false /* instructions: 'Do not add more than 5 scoops!' */ }));
console.log(tooManyScoops({ flavor: 'chocolate', scoops: 3, sauce: 'strawberry' }));
let myIceCream1;
myIceCream1 = [
    'chocolate',
    'vanilla',
    'strawberry',
];
let myStr = myIceCream1[0];
console.log(myStr); // returns 'chocolate'
;
;
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
;
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
;
// let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
// console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
// let conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
// console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"
// hoisted
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(1, 2));
// not hoisted
let subtractNumbers = function (x, y) {
    return x - y;
};
console.log(subtractNumbers(1, 3));
let sum = function (input) {
    let total = 0;
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
let addNumbers2 = function (x, y) {
    return x + y;
};
// Single-Line Arrow function / shorthand for anonymous function
let addNumbers3 = (x, y) => x + y; // uses CONCISE BODY SYNTAX or IMPLICIT RETURN
// Multi-Line Arrow function
let total2 = (input) => {
    let total = 0;
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
function sum1000(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
;
console.log(sum1000([5, 3, 3, 4]));
console.log('HELLO!');
function addNumbers1(x, y) {
    return x + y;
}
addNumbers1(1, 2); // Returns 3
// addNumbers1(1);    // Returns an error
function addNumbers4(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers4(1, 2); // Returns 3
addNumbers4(1); // Returns 1
function addNumbers5(x, y = 25) {
    return x + y;
}
console.log(addNumbers5(1, 2)); // Returns 3
console.log(addNumbers5(1)); // Returns 26
// This is an ellipsis ... <-- the three dots
let addAllNumber = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
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
;
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
;
displayMessage({ sender: 'Victor', text: 'Hello. Good morning.' });
// Required Parameters
let addThreeNumbers = (x, y, z) => {
    if (z === undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
console.log(addThreeNumbers(10, 20));
console.log(addThreeNumbers(10, 20, 30));
// console.log(addThreeNumbers(10, 20, 30, 40));
// Default parameters
// Arrow function
let subtractNumberss = (x, y, z = 100) => x - y - z;
console.log(subtractNumberss(10, 20, 30));
console.log(subtractNumberss(10, 20));
// two arrow functions
let addNumbersss = (x, y) => x + y;
let subtractNumbersss = (x, y) => x - y;
console.log(addNumbersss(1, 2), "NOT THIS ONE...");
console.log(subtractNumbersss(1, 2), "NOT THIS ONE...");
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbersss;
    }
    else {
        return subtractNumbersss;
    }
};
console.log(doCalculation('add')(10, 50), "This is my calculation");
let addNumber10 = (x, y) => x + y;
let addNumber11 = (number1, number2) => number1 + number2;
let addNumber12 = (num1, num2) => num1 + num2;
/*  TODO: Convert the sortDescending and sortAscending functions to arrow
    functions. */
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in ascending order. */
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/*  The buildArray function builds an array of unique random numbers containing the number
    of items based on the number passed to it. The sortOrder parameter determines
    whether to sort the array in ascending or descending order. */
/*  TODO: Update the BuildArray function. */
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber; // 50
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
;
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
;
let loanCalculator = (principal, interestRate, months = 12) => {
    let interest = interestRate / 1200; // Calculates the monthly interest rate
    let payment;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
};
let myLoan = loanCalculator(1000, 5, 3);
console.log(myLoan, "THIS IS MY LOAN!");
//# sourceMappingURL=practice.js.map