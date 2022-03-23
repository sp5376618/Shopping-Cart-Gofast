const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

//animation
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

// //signIn
// document.getElementById("button").addEventListener("click", function () {
//   document.querySelector(".bg-modal").style.display = "flex";
// });
// document.querySelector(".closee").addEventListener("click", function () {
//   document.querySelector(".bg-modal").style.display = "none";
// });

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});
// //Add To Cart
let carts = document.querySelectorAll(`.bx-shopping-bag`);
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener(`click`, () => {
    cartNumbers();
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(`.nav-item .unique`).textContent = productNumbers;
  }
}
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(`.nav-item .unique`).textContent =
      productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(`.nav-item .unique`).textContent = 1;
  }
}
onLoadCartNumbers();

//removecart
function removecart() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(`.nav-item .unique`).textContent =
      productNumbers - 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(`.nav-item .unique`).textContent = 0;
  }
}
//remove from cart
function deletecart() {
  document.getElementById("cartnone").innerHTML = "";
}
//calculation
// function calculate() {
//   return `<div class="total-price">
//   <table>
//     <tr>
//       <td>Subtotal</td>
//       <td>${0}</td>
//     </tr>
//     <tr>
//       <td>Tax</td>
//       <td>${10}</td>
//     </tr>
//     <tr>
//       <td>Total</td>
//       <td>${0}</td>
//     </tr>
//   </table>
//   <a id="button" class="checkout btn">Proceed To Checkout</a>
// </div>`;
// }

// let products = [];
// function totalproducts() {
//   products.;
// }

//dropdown
let setBg = () => {
  document.getElementById("closecart").style.display = "block";
};
document.querySelectorAll("closeevent").onclick = () => {
  document.getElementById("closecart").style.display = "none";
};
