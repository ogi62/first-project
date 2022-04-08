const paragraf = document.getElementById("paragraf");
const dugme = document.getElementById("btn");

dugme.addEventListener("click",()=> {
    paragraf.classList.toggle("show");
})