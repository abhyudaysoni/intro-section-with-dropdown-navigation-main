const featuresBtn = document.querySelector("#features-dropdown-btn");

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

featuresBtn.addEventListener("mouseover", openFeaturesMenu);
featuresBtn.addEventListener("mouseout", openFeaturesMenu);
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

companyBtn.addEventListener("mouseover", openCompanyMenu);
companyBtn.addEventListener("mouseout", openCompanyMenu);
companyBtn.addEventListener("click", openCompanyMenu);
