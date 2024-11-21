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
const diallog = document.getElementById("diallog");

document.addEventListener("click", () => {
    diallog.showModal();
})