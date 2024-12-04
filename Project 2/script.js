const inputBox = document.getElementById("input-box")
const listCheck = document.getElementById("Checkboxes")

function addTask(){
    if(inputBox.value === ''){
        alert("Looks like you forgot to type...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCheck.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value ="";
}