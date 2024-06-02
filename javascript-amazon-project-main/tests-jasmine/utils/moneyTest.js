//LSPPDay02 Testing Framework in JavaScript: JASMINE

import { formatCurrency } from "../../scripts/utils/money.js";

//describe('test suite', function)
//it('test name', function)
//expect(value) //used to compare values
//toEqual is a method in Jasmine

describe("test suite: formatCurrency", () => {
  //test1
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  //test2
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  //changing the code to fail intentionally
  //test3
  it("rounds up", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  //test4
  it("rounds down", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});
