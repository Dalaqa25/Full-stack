const dialog = document.getElementById("dialog");
const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const dialo2 = document.getElementById("dialog2");

document.addEventListener("mouseover", (event) => {
    if (event.target === box)
    {
        dialog.show()
    }
    else if (event.target === box2)
    {
        dialog2.show()
    }
})
document.addEventListener("mouseout", (event) => {
    if (event.target === box)
    {
        dialog.close();
    }
    if (event.target === box2)
    {
        dialog2.close();
    }
})