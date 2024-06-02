//LSPPDay02 Testing in JavaScript
import { formatCurrency } from "../scripts/utils/money.js";

//Manual Testing
//Automated Testing - uses code to test codes

//Test for format currency
console.log('test suite: format currency');
//Basic Test Cases
console.log("cents to dollars");
if (formatCurrency(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

//Edge Test Cases - Critical test conditions
console.log("works with 0");
if (formatCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("rounds up");
if (formatCurrency(2000.5) === "20.01") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("rounds down");
if (formatCurrency(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
