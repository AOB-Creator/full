var text = ""

const input = document.getElementById("calc");

setInterval(() => {
    input.value=text    
}, 33);
input.addEventListener("touchend", (event)=>{
        event.target.value=text;
})        




const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((item)=>{
        
    item.addEventListener("click", function(event){

        
        switch(event.target.innerText){
            case "C": text=text; break;
            case "=": text=text; break;
            case "+/-": text=-text; break;
            case "%": text=`${text}/100`; break;
            case ".": text=`${text}.`; break;            
            default: text = text + event.target.innerText ; 
        }

        console.log(text.substring(text.length-1, text.length))

        // switch(text.substring(text.length-1, text.length)){
        //     case "+": text=text.slice(0, text.length-1); break;
        //     case "-": text=text.slice(0, text.length-1); break;
        //     case "*": text=text.slice(0, text.length-1); break;
        //     case "/": text=text.slice(0, text.length-1); break;
        //     case ".": text=text.slice(0, text.length-1); break;
        // }


        
        
    })
})

function Cancellation(){
    const cancel = document.getElementById("cancel")
    cancel.addEventListener("click", function(){
        text=""
    })
}
Cancellation()




const evaluation = document.getElementById("evals")
evaluation.addEventListener("click", function(){
    var result;
    try{
        result = eval(text)
        console.log(result)
        text=result
    }
    catch(error){
        alert("You are fired !!! ")
        text=text.slice(0, text.length-1)
    }
    
})
