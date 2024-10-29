let position = 0; // Current position of section-1
const maxPosition = 250; // Maximum position to move within container

function moveRight() {
  if (position < maxPosition) {
    position += 250; // Adjust the step size for each click
    document.getElementById('section1').style.left = position + 'px';
  }
}