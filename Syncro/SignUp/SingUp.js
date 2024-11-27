const freelace = document.getElementById("freelace");
const business = document.getElementById("business");
const h1 = document.getElementById("h1");
const dialogBoxes = document.getElementById("dialog-boxes");
const SingUpFreelance = document.getElementById("Sing-Up-freelance");
const closeBtn1 = document.getElementById("close-button1");

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

      // Disable the mouseover event
      document.removeEventListener("mouseover", mouseoverHandler);
      // Optionally update the h1 text to indicate the event is disabled
      h1.textContent = "Now you are a Freelancer";
    }
    if (event.target === business)
    {
        business.style.border = "5px solid #8043d6";
        business.style.width = "40%"
        business.style.cursor = "default"
  
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

closeBtn1.addEventListener("click", () => {
    SingUpFreelance.style.display = "none";
    business.style.width = "50%";
    business.style.background = "url('./SingUpSVG/Businessman-pana\ \(1\).svg') no-repeat center";
    freelace.style.border = "5px solid #fff"
    h1.textContent = "What is you're Role?"
    freelace.style.width = "50%";
})