const profileBtn = document.getElementById("profileIcon");
const homeBtn = document.getElementById("homeIcon");
const projectBtn = document.getElementById("folderIcon");
const contentPage = document.getElementById("contentPage");

homeBtn.addEventListener("click", () => {
    contentPage.style.backgroundColor = "green";
})

profileBtn.addEventListener("click", () => {
    contentPage.style.backgroundColor = "purple";
})

projectBtn.addEventListener("click", () => {
    contentPage.style.backgroundColor = "red";
});