const contentPage = document.getElementById("contentPage");
const welcomePage = document.getElementById("welcomePage");
const profilePage = document.getElementById("profilePage");
const navbarMobile = document.getElementById("navbarMobile");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const profileIcon = document.querySelector(".profileIcon");
profileIcon.addEventListener("click", () => {
    welcomePage.style.display = "none";
});

const profileIconMobile = document.getElementById("profileIconMobile");
profileIconMobile.addEventListener("click", () => {
    welcomePage.style.display = "none";
});

menuBtn.addEventListener("click", () => 
{
    menuBtn.style.display = "none";
    navbarMobile.style.display = "block";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => 
{
    navbarMobile.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
});