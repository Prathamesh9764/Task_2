
// // {/* <button id="add-to-cart-btn">Add to Cart</button> */}
// //   // JavaScript
// //   const addToCartBtn = document.getElementById('add-to-cart-btn');
// //   const cart = [];

// //   addToCartBtn.addEventListener('click', addToCart);

// //   function addToCart() {
// //     cart.push('Product');
// //     console.log(`Cart: ${cart.length} item(s)`);
// //     // You can perform other operations related to the cart here
// //   }


// // Step 1: Create a cart and addtocart function
// // let cart = []; // Initialize an empty cart

// function addtocart() {
//   cart.push("item"); // Add an item to the cart
// }

// // Step 2: Implement the cart loop
// function cart() {
//   for (let i = 0; i < cart.length; i++) {
//     console.log("Processing item " + (i + 1) + " in the cart.");
//     // Add your desired logic here for each item in the cart
//   }
// }

// // Example usage:
// addtocart(); // Click addtocart button once
// addtocart(); // Click addtocart button again

// startCartLoop(); // Start the cart loop

// const registerButtons = document.querySelectorAll('.addtocart');

// registerButtons.forEach(button => {
//   addtocart.addEventListener('click', () => {
//     // Replace with your desired registration logic
//     // For example, making an API request to register the user
//     alert('Thank you for registering!');
//     function addtocart() {
//         cart.push("item"); // Add an item to the cart
//       }
//       function cart() {
//           for (let i = 0; i < cart.length; i++) {
//             console.log("Processing item " + (i + 1) + " in the cart.");
//             // Add your desired logic here for each item in the cart
//           }
//         }
//     // alert('Thank you for registering!');
//     // registerUser()
//     //   .then(() => {
//     //     redirectToSuccessPage();
//     //   })
//       // .catch(error => {
//       //   console.error('Registration failed:', error);
//       // });
//   });
// });

// Step 1: Define a function to handle the click event on the "Add to Cart" buttons
function addToCartHandler(event) {
  // Retrieve the product details
  const product = event.target.parentElement;
  const productName = product.querySelector("h3").textContent;
  const productPrice = product.querySelector("p").textContent;

  // Create a new cart item element
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <span>${productName}</span>
    <span>${productPrice}</span>
  `;

  // Append the cart item to the cart container
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.appendChild(cartItem);

  // Increment the cart badge count
  const cartBadge = document.querySelector(".badge");
  let count = parseInt(cartBadge.textContent);
  count++;
  cartBadge.textContent = count;
}

// Step 2: Attach the click event listener to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".addtocart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCartHandler);
});

// Step 3: Define a function to handle the click event on the cart icon
function showCartHandler(event) {
  // Toggle the visibility of the cart container
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.classList.toggle("show");
}

// Step 4: Attach the click event listener to the cart icon
const cartIcon = document.querySelector(".bi-cart");
cartIcon.addEventListener("click", showCartHandler);
