const profileBtn = document.getElementById("profileIcon");
const homeBtn = document.getElementById("homeIcon");
const projectBtn = document.getElementById("folderIcon");
const contentPage = document.getElementById("contentPage");
const welcomePage = document.getElementById("welcomePage");
const profilePage = document.getElementById("profilePgae");


profileBtn.addEventListener("click", () => {
    profilePage.style.display = "block";
    welcomePage.style.display = "none";
    contentPage.style.background = "none";
})