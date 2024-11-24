//search input
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

document.getElementById("searchIcon").addEventListener("click", function () 
{
    if (searchInput.style.display === "none" || searchInput.style.display === "")
    {
        searchInput.style.display = "inline-block";
        searchInput.focus();
    }
    else
    {
        searchInput.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (event.target !== searchInput && event.target !== searchIcon) {
        searchInput.style.display = "none";
    }
});

//Sing in dialog box
const signInBtn = document.getElementById("Login-btn");
const dialog = document.getElementById("diallog");
const closeBtn = document.querySelector(".close-button");

signInBtn.addEventListener("click", () => {
    dialog.showModal(); 
})

closeBtn.addEventListener("click", () => {
    dialog.close();
})

//Sing in via email
const emailBtn = document.getElementById("email-btn");
const emailDialog = document.getElementById("email-dialog");
const goBackBtn = document.getElementById("go-back");

emailBtn.addEventListener("click", () => {
    dialog.close();
    emailDialog.showModal();
})

goBackBtn.addEventListener("click", () => {
    emailDialog.close();
    dialog.showModal();
})

//Dialog for top bar
    //clickable elemnts
const syncroTeams = document.getElementById("syncro-Teams");
const plansAndPricing = document.getElementById("plans-and-pricing");
const learn = document.getElementById("Learn-i");
const closeBtn1 = document.getElementById("close-button1");
const closeBtn2 = document.getElementById("close-button2")
const closeBtn3 = document.getElementById("close-button3");
    //actuall dialogs
const teamsDialog = document.getElementById("Teams");
const pricingDialog = document.getElementById("pricing-dialog");
const learnDialog = document.getElementById("Learn-dialog");

document.addEventListener("click", (event) => {
    if (event.target === syncroTeams)
    {
        teamsDialog.showModal();
    }
    if (event.target === plansAndPricing)
    {
        pricingDialog.showModal();
    }
    if (event.target === learn)
    {
        learnDialog.showModal();
    }
    if (event.target === closeBtn1)
    {
        teamsDialog.close();
    }
    if (event.target === closeBtn2)
    {
        pricingDialog.close();
    }
    if (event.target === closeBtn3)
    {
        learnDialog.close();
    }
})
