function takeValue(x){
    document.getElementById('calculation').value += x;
}

function clearInput(y) {
    document.getElementById('calculation').value = y;
}

function calculateResult(){
    const result = eval(document.getElementById('calculation').value);
    document.getElementById('calculation').value = result;
}