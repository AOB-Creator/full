const alters = document.getElementById("alters")
const menubar = document.querySelector(".menubar")
alters.addEventListener("click", function(){
    menubar.classList.remove("nonemenu")
})


const closeeyes = document.querySelector("#closeeyes");

closeeyes.addEventListener("click", function(){
    menubar.classList.add("nonemenu")
})