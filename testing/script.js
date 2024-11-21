const openBtn = document.getElementById("open-dialog");
const closeBtn = document.getElementById("colse-dialog");
const dialogBox = document.getElementById("dialog"); 

openBtn.addEventListener('click', () => {
    dialogBox.showModal();
})

closeBtn.addEventListener('click', () => {
    dialogBox.close();
})