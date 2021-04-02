var num1 = '', num2 = '', ans, action, num='';
var right = document.getElementById('right');
var left = document.getElementById('left');
var btn1 = document.getElementById('btn1');
// var btn2 = document.getElementById('btn2');
// var btn3 = document.getElementById('btn3');
// var btn4 = document.getElementById('btn4');


function insert(data) {
    if (action == null) {
        num1 = num1 + data;
        right.innerHTML = num1;
    } else {
        num2 = num2 + data;
        right.innerHTML = num2;
    }
}


function calculate(params) {
    action = params;
    left.innerHTML = action;
}

function clears() {
    ans, action = null;
    left.innerHTML = '';
    right.innerHTML = (num1 ='', num2='');
}


function equal() {
    if (action == '+') {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        right.innerHTML = add(num1, num2);
    }
    else if (action == '-') {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        right.innerHTML = sub(num1, num2);
    }
    else if (action == '/') {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        right.innerHTML = div(num1, num2);
    }
    else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
       right.innerHTML = mul(num1, num2);
    }
}



function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
