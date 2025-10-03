let input = document.getElementById("input");
let result = document.getElementById("result");
const cal = document.getElementById("cal");
const clear = document.getElementById("clear");

function handle(el){
    // console.log(el);
    // el.style.transform = "scale(1.2)";
    input.value=input.value+el.innerText;
}

function ans(result){
    // console.log(result);
    // try {
    //     result.value = eval(result.value);
    // } catch (error) {
    //     result.value = "Error";
    // }
    if(result.value !== ""){
        result.value=eval(result.value);
    }
    
}

cal.addEventListener("click", ()=>{
    if(input.value !== ""){
        result.value=eval(input.value);
    }
})

clear.addEventListener("click", ()=>{
    result.value = "";
    input.value = "";
    // console.log("clear");
})


