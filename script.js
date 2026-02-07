function sayYes() {
  document.getElementById("result").innerText =
    "I Love You Too 💕😍";
}

// Change picture
  const pic = document.getElementById("valentinePic");
  if (pic) {
    pic.src = "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif"; // alternative GIF
    pic.style.width = "220px";
   
    pic.style.borderRadius = "30px";
  } else {
    console.log("Error: Valentine picture element not found!");
  }
// NO button runs away 
function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const box = document.querySelector(".box");

  const maxX = box.clientWidth - noBtn.offsetWidth;
  const maxY = box.clientHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}