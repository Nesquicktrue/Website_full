const container = document.querySelector(".infotext");
const btnError = document.createElement("div");



btnError.textContent = "Připravuje se...";

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    btnError.classList.toggle("display");
    container.appendChild(btnError);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });