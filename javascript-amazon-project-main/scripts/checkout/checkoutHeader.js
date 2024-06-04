
export function renderCheckoutHeader() {
 const html=` Checkout (<a
    class="return-to-home-link js-return-to-home-link"
    href="amazon.html"
  >items</a
  >)`
  document.querySelector('.js-checkout-header-middle-section').innerHTML=html;
}