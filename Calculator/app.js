
let display = document.querySelector("#display");
 const btnVal = document.querySelectorAll(".btn");
const clear = document.querySelector("#clear");
const delLast = document.querySelector("#delLast");
const calculate = document.querySelector("#calculate");


 display.value="";
 
    btnVal.forEach((val) => {
       val.addEventListener("click",() => {
        val.style.border = "2px solid black";
       let  value = val.innerText;
        display.value+=value;
       })
    })
    


function clearDisplay() {
	display.value = '';
}

function deleteLast() {
	display.value = display.value.slice(0, -1);
}

function Calculate() {
	try {
		display.value = eval(display.value);

	} catch (e) {
        display.value = "Error";
	}
}

calculate.addEventListener("click",()=>{
    Calculate();
})

clear.addEventListener("click",()=>{
    clearDisplay();
})

delLast.addEventListener("click",()=>{
    deleteLast();
})
