const task3Element = document.getElementById('task-3');

function func1() {
    alert("Some text of my choice");
}

function func2(name) {
    alert(name);
}

task3Element.addEventListener('click', func1);


function func3(str1, str2, str3) {
    return str1 + str2 + str3;
}
const concat = func3('Kaan', 'l', 'd');
alert(concat);
