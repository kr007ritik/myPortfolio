let gallery = document.querySelector(".project");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
let screenWidth = document.documentElement.clientWidth || window.innerWidth;

const arrOfprojects = [
  ["https://rk-qr-code-generator.netlify.app/", "QRC-gen.png"],
  ["https://rk-text-to-voice-converter-app.netlify.app/", "textToVoice.png"],
  ["https://rk-calculator-app.netlify.app/", "calculator.png"],
  ["https://rk-quiztest-app.netlify.app/", "quizApp.png"],
  ["https://rk-todo-app.netlify.app/", "todo.png"],
  ["https://rk-weatherapp.netlify.app/", "weather.png"],
  ["https://rk-tictactoe-game.netlify.app/", "tictactoe.png"],
  ["https://myportfolio-page-rk.netlify.app/", "portfolio.png"],
  ["https://rk-mygov.netlify.app/", "myGov.png"],
  ["https://orderonline-meal.netlify.app/", "foodOrder.png"],
];

gallery.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  gallery.scrollLeft += evt.deltaY;
  gallery.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  if(screenWidth >= 500){
    gallery.scrollLeft += 420;
  }else{
    gallery.scrollLeft += 390;
  }
});

backBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  if(screenWidth >= 500){
    gallery.scrollLeft -= 420;
  }else{
    gallery.scrollLeft -= 390;
  }
});

function showProjects() {
  for (let i = 0; i < arrOfprojects.length; i++) {
    const a = document.createElement("a");
    const img = document.createElement("img");

    let url = arrOfprojects[i][0];
    let src = arrOfprojects[i][1];
    gallery.appendChild(a);
    a.appendChild(img);
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    img.setAttribute("src", `project_img/${src}`);
  }
}

showProjects();
