const profileBtn = document.getElementById("profileIcon");
const homeBtn = document.getElementById("homeIcon");
const projectBtn = document.getElementById("folderIcon");
const contentPage = document.getElementById("contentPage");
const welcomePage = document.getElementById("welcomePage");
const profilePage = document.getElementById("profilePage");


profileBtn.addEventListener("click", () => {
    profilePage.style.display = "block";
    welcomePage.style.display = "none";    
})