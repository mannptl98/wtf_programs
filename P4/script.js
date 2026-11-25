const storeTitle =
    document.getElementById("storeTitle");
const themeBtn =
    document = getElementById("themeBtn");
const cartCount =
    document = getElementById("cartCount");
const searchInput =
    document = getElementById("searchInput");

const productCards =
    document = getElementsByClassName("product-card");

const navigationItems =
    document = getElementsByTagName("li");

const welcomeText =
    document.querySelector(".hero h2");

const addCartButtons =
    document.querySelectorAll(".addCart");

let darkMode = false;
themeBtn.addEventListener("click", function () {
    darkMode = !darkMode;
    document.body.classList.toggle("dark");
    if (darkMode) {
        themeBtn.textContent = "Light Mode";
        welcomeText.textContent =
            "welcome to ShopEase-Dark Mode";
    }
    else {
        themeBtn.textContent = "Dark Mode";
        welcomeText.textContent =
            "welcome to ShopEase";
    }
});