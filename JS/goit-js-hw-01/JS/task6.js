"use strict";

let input = '';
let total = 0;

while (input === '') {
    input = prompt('Введите число');
}

while (input) {
  input = Number(input);
    if (input){
    total = total + input ;
  }
  input = prompt('Введите число');
  
 
 
}
alert ( `Общая сумма чисел = ${total}`);




