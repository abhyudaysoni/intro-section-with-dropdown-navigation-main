const featuresBtn = document.querySelector("#features-dropdown-btn");
const sideNav = document.querySelector(".side-nav-right");
const overlay = document.querySelector(".overlay");
const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");

const companyBtn = document.querySelector("#company-dropdown-btn");

function openFeaturesMenu() {
    if (featuresMenu.style.display === "flex") {
        featuresMenu.style.display = "none";
    } else {
        featuresMenu.style.display = "flex";
        featuresMenu.style.flexDirection = "column";
    }
}

featuresBtn.addEventListener("mouseover", openFeaturesMenu);
featuresMenu.addEventListener("mouseout", openFeaturesMenu);

function openCompanyMenu() {
    if (companyMenu.style.display === "flex") {
        companyMenu.style.display = "none";
    } else {
        companyMenu.style.display = "flex";
        companyMenu.style.flexDirection = "column";
    }
}

companyBtn.addEventListener("mouseover", openCompanyMenu);
companyMenu.addEventListener("mouseout", openCompanyMenu);

const hamburger = document.querySelector("#hamburger-btn");

function openSideNav() {
    sideNav.style.width = "70%";
    body.setAttribute("scroll", "no");
    body.style.overflow = "hidden";
    overlay.style.width = "100%";
    sideNav.classList.add("active");
}
function closeSideNav() {
    body.setAttribute("scroll", "yes");
    body.style.overflow = "scroll";
    sideNav.style.width = "0%";
    overlay.style.width = "0%";
    sideNav.classList.remove("active");
}

hamburger.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);
