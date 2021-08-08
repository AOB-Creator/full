var text = ""

const input = document.getElementById("calc");
input.addEventListener("change", (event)=>{
        event.target.value=text
})        




const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((item)=>{
        
    item.addEventListener("click", function(event){
    
        text = text + event.target.innerText
        
        console.log(text)
        
    })
})

function Cancellation(){
    const cancel = document.getElementById("cancel")
    cancel.addEventListener("click", function(){
        text=""
        console.log(text)
    })
}


Cancellation()

const evaluation = document.getElementById("evals")
evaluation.addEventListener("click", function(){

    console.log(eval(text))
})
