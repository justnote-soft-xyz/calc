var numbers = document.querySelectorAll ('.number'),
    operations = document.querySelectorAll ('.operation'), 
decimalBtn = document.getElementById('decimal'),
    result = document.getElementById('result'),
     clearbtn = document.getElementById('clearbtn'); 
 
for (var i=0; i<numbers.length; i++){
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        console.log('клик по кнопке с номером');
});
};
for (var i=0; i<operations.length; i++){
    var operation = operations[i];
    operation.addEventListener('click', function (e) {
        console.log('клик по кнопке с операцией');
});
};
clearbtn.addEventListener('click', function (e) {
     console.log('клик по кнопке с Очистить');
});
result.addEventListener('click', function (e) {
     console.log('клик по кнопке с результат');
});
decimalBtn.addEventListener('click', function (e) {
     console.log('клик по кнопке с точкой');
});
/*
function namberPress()  {
    // ввод значений
};
function operation(argument) {
    //математические операции
};
function decimal(argument) {
    //функция точки
};
function clear(argument) {
    //очистка
};
function instruction(argument) {
    //описание калькулятора
};
*/ 