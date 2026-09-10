let display = document.getElementById("display")

//display.value = "123"; shows "123" , in the input In JavaScript, the content of an <input> is accessed with its .value property.
console.log(typeof display.value);

function appendValue(numberS){
    display.value += numberS //variable
}

function clearData(){
    display.value = ""
}

function erase(){
    display.value = display.value.slice(0, -1);
}

function calculateResult(){
    try{
        display.value =eval(display.value)
    }
    catch{
        display.value = "Error"
    }
}

