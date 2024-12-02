const profileBtn = document.getElementById("profileIcon");
const homeBtn = document.getElementById("homeIcon");
const projectBtn = document.getElementById("folderIcon");
const contentPage = document.getElementById("contentPage");
const welcomePage = document.getElementById("welcomePage");
const profilePgae = document.getElementById("profilePgae");

homeBtn.addEventListener("click", () => {
    contentPage.style.backgroundColor = "green";
})

profileBtn.addEventListener("click", () => {    
    welcomePage.style.display = "none";
    profilePgae.style.display = "block";
});

projectBtn.addEventListener("click", () => {
    contentPage.style.backgroundColor = "red";
});