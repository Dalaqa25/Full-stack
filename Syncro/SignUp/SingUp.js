const freelace = document.getElementById("freelace");
const business = document.getElementById("business");
const h1 = document.getElementById("h1");
const dialogBoxes = document.getElementById("dialog-boxes");
const SingUpFreelance = document.getElementById("Sing-Up-freelance");
const SingUpBusiness = document.getElementById("Sing-Up-Business");
const reloadBtn1 = document.getElementById("reload-button1");
const reloadBtn2 = document.getElementById("reload-button2")

const mouseoverHandler = (event) => {
    if (event.target === freelace) {
      h1.textContent = "Freelancer?";
    } else if (event.target === business) {
      h1.textContent = "Business?";
    } else {
      h1.textContent = "What is your Role?";
    }
};

  // Add the mouseover event listener
document.addEventListener("mouseover", mouseoverHandler);

  // Add the click event listener
  function clickHandler(event) {
    if (event.target === freelace) {
      freelace.style.border = "5px solid #8043d6";
      freelace.style.width = "40%"
      freelace.style.cursor = "default"

      business.style.width = "60%"
      business.style.background = "none"
      business.style.border = "5px solid #fff"
      dialogBoxes.style.gap = "1rem"
      business.style.cursor = "default"
      
      SingUpFreelance.style.display = "block";
      h1.textContent = "Now you are a Freelancer";

      document.removeEventListener("mouseover", mouseoverHandler);
    }
    if (event.target === business)
    {
        business.style.border = "5px solid #8043d6";
        business.style.width = "40%"
        business.style.cursor = "default"
        SingUpBusiness.style.display = "block"
  
        freelace.style.width = "60%"
        freelace.style.background = "none"
        freelace.style.border = "5px solid #fff"
        dialogBoxes.style.gap = "1rem"
        freelace.style.cursor = "default"

        h1.textContent = "Now you are a Businessman";
        document.removeEventListener("mouseover", mouseoverHandler);
    }
}

document.addEventListener("click", clickHandler);

reloadBtn1.addEventListener("click", () => {
  location.reload();
})

reloadBtn2.addEventListener("click", () => {
  location.reload();
})