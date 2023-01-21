
const div = document.querySelector("div");

document.querySelector(".hide").addEventListener("click", () => {
    div.classList.add("div_hide");
  });
  
document.querySelector(".show").addEventListener("click", () => {
  div.classList.remove("div_hide");
});

document.getElementById("boton_color").addEventListener("click", function() {
    document.body.style.backgroundColor = "bisque";
 });
 
 document.getElementById("boton_default").addEventListener("click", function() {
  document.body.style.backgroundColor = "rgb(216, 237, 243)";
});