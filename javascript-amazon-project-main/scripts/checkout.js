import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
//import "../data/cart-class.js";
//import '../data/car.js';
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js

import { loadProducts } from "../data/products.js";

// Using Promise.all() to load products and cart concurrently
// Resolving when both promises have completed
// Then, rendering the checkout header, payment summary, and order summary

//promise.all contains array of promises
Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve("undefined");
    });
  }),
]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderPaymentSummary();
  renderOrderSummary();
});

// //promise, built-in-class
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("value1"); //lets us share value between two steps of a promise.
//   });
// })

//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })

//   .then(() => {
//     renderCheckoutHeader();
//     renderPaymentSummary();
//     renderOrderSummary();
//   });

// // loadProducts(() => {
// //   loadCart(() => {
// //     renderCheckoutHeader();
// //     renderPaymentSummary();
// //     renderOrderSummary();
// //   });
// // });
