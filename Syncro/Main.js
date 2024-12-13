const contentPage = document.getElementById("contentPage");
const welcomePage = document.getElementById("welcomePage");
const profilePage = document.getElementById("profilePage");
const navbarMobile = document.getElementById("navbarMobile");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const profileIcon = document.querySelector(".profileIcon");
profileIcon.addEventListener("click", () => {
    welcomePage.style.display = "none";
    profilePage.style.display = "block";
    contentPage.style.background = "#fff"
});

const profileIconMobile = document.getElementById("profileIconMobile");
profileIconMobile.addEventListener("click", () => {
    welcomePage.style.display = "none";
    profilePage.style.display = "block";
    contentPage.style.background = "#fff"
});

menuBtn.addEventListener("click", () => 
{
    menuBtn.style.display = "none";
    navbarMobile.style.display = "block";
    closeBtn.style.display = "block";
});

const homeBtn = document.getElementById("homeIcon");
const homePage = document.getElementById("homePage");
document.addEventListener("click", (event) => {
    if (event.target === homeBtn)
    {
        welcomePage.style.display = "none";
        homePage.style.display = "block";
        profilePage.style.display = "none";
        contentPage.style.background = "#fff"
        console.log("home page");
    }
})

closeBtn.addEventListener("click", () => 
{
    navbarMobile.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
});