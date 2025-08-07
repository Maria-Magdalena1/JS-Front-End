document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const allAddBtnEls = document.querySelectorAll('.add-product');
   const textareaEl = document.querySelector('textarea');
   const checkoutBtnEl = document.querySelector('.checkout');

   allAddBtnEls.forEach(btnEl => {
      btnEl.addEventListener('click', handleProductAdd);
   });

   checkoutBtnEl.addEventListener('click',handleCheckout);

   let products=new Set();
   let totalPrice=0;

   function handleProductAdd(e) {
      const outerProductDivEl = e.target.closest('.product');
      const productTitleDivEl = outerProductDivEl.querySelector('.product-title');
      const product = productTitleDivEl.textContent;
      const priceDivEl = outerProductDivEl.querySelector('.product-line-price');
      const price = Number(priceDivEl.textContent);

      textareaEl.value+=`Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      products.add(product);
      totalPrice+=price;
   }

   function handleCheckout() {
      const productsStr=Array.from(products).join(', ');
      textareaEl.value+=`You bought ${productsStr} for ${totalPrice.toFixed(2)}.`;
      checkoutBtnEl.disabled=true;
      allAddBtnEls.forEach(btnEl=>btnEl.disabled=true);
   }
}
