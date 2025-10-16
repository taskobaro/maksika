const inputField = document.querySelector(".input-field")
function addToField(x) {
    inputField.innerHTML = inputField.innerHTML + x;
}

function clearField() {
    inputField.innerHTML = "";
}

function getField() {
    return inputField.innerHTML;
}

function removeSymbol() {
    inputField.innerHTML = inputField.innerHTML.slice(0, inputField.innerHTML.length-1);
}

function clearSyntax(){
    const lastSymbol = inputField.innerHTML[inputField.innerHTML.length-1];
    const prelastSymbol = inputField.innerHTML[inputField.innerHTML.length-2];
    for (const key in wrongConsistency){
        if (key == lastSymbol){
       
        if(wrongConsistency[key].includes(prelastSymbol))
            removeSymbol();
        }

    }
}


const wrongConsistency = {
    "+": "-*/.",
    "*": "-*/.",
    "/": "-*/.",
    "-": "-.",
    ".": "-*/.",
}


function calculate(){
    if(inputField.innerHTML.trim().length>0)
    inputField.innerHTML=eval(inputField.innerHTML);
}

const keys = [
    {key: "<",w:1,h:1, action: removeSymbol},   {key: "/",w:1,h:1},{key: "*",w:1,h:1},{key: "-",w:1,h:1},
    {key: "7",w:1,h:1},   {key: "8",w:1,h:1},{key: "9",w:1,h:1},{key: "0",w:1,h:1},
    {key: "4",w:1,h:1},   {key: "5",w:1,h:1},{key: "6",w:1,h:1},{key: "+",w:1,h:2},
    {key: "1",w:1,h:1},   {key: "2",w:1,h:1},{key: "3",w:1,h:1},{key: "C" ,w:1,h:1, action: clearField},
    {key: ".",w:1,h:1},   {key: "=",w:2,h:1, action: calculate}   
    
];

document.addEventListener("DOMContentLoaded",() => {
    const keyboard = document.querySelector(".keyboard");
    for(const k of keys){
        let button = document.createElement("span");
        button.innerHTML = k.key;
        button.style.gridRow=`span ${k.h}`;
        button.style.gridColumn=`span ${k.w}`;
        if(k.action===undefined)
            button.onclick=() => {addToField(k.key);clearSyntax()};
        else
            button.onclick = k.action;
        

        keyboard.appendChild(button)};
})