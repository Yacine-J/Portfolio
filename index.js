let Apropos = document.querySelector("#Apropos");
Apropos.addEventListener("mouseover", () => {
    Apropos.style.backgroundColor = "lightblue";
});
Apropos.addEventListener("mouseout", () => {
    Apropos.style.backgroundColor = "";
});

function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }