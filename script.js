const featuresBtn = document.querySelector("#features-dropdown-btn");
const body = document.querySelector("body");
const sideNav = document.querySelector(".side-nav-right");
const overlay = document.querySelector(".overlay");

const companyBtn = document.querySelector("#company-dropdown-btn");

function openFeaturesMenu() {
    const featuresMenu = document.querySelector(".features-menu");
    if (featuresMenu.style.display === "flex") {
        featuresMenu.style.display = "none";
    } else {
        featuresMenu.style.display = "flex";
        featuresMenu.style.flexDirection = "column";
    }
}

// featuresBtn.addEventListener("mouseover", openFeaturesMenu);
// featuresBtn.addEventListener("mouseout", openFeaturesMenu);
featuresBtn.addEventListener("click", openFeaturesMenu);

function openCompanyMenu() {
    const companyMenu = document.querySelector(".company-menu");
    if (companyMenu.style.display === "flex") {
        companyMenu.style.display = "none";
    } else {
        companyMenu.style.display = "flex";
        companyMenu.style.flexDirection = "column";
    }
}

// companyBtn.addEventListener("mouseover", openCompanyMenu);
// companyBtn.addEventListener("mouseout", openCompanyMenu);
companyBtn.addEventListener("click", openCompanyMenu);

const hamburger = document.querySelector("#hamburger-btn");

function openSideNav() {
    sideNav.style.width = "50%";
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
