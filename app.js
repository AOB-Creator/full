function Backer(){
    window.history.back()
}

document.getElementById("button").addEventListener("click", ()=>{
        Backer()
        console.log(history.back())
})