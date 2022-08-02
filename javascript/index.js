const colors = ["#00FFFF", "#6495ED", "#9932CC", "#228B22", "rgb(255,255,0)"]
const btn = document.querySelector("#btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", function(){
    colorName.textContent = colors[random()];
    document.body.style.backgroundColor = colors[random()];
});

function random(){
    return Math.floor(Math.random() * colors.length);
}