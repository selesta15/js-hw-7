/*
На forEach:
Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
*/
//  const numbers = [1, 2, 3, 4, 5, 6];
//  const numbersTwo = [];
//  numbers.forEach((num) => {
//     numbersTwo.push(num * num)
//  })
 
//  console.log(numbersTwo)

/*
 Дан массив с числами. Найдите сумму этих чисел.
*/
// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// numbers.forEach((num) => {
//     sum += num  
// })
// console.log(sum)

/*
На map:
Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
*/

// const numbers = [1, 2, 3, 4, 5, 6];
// const square = numbers.map(num => num * num);
// console.log(square)

/*
На reverse:
Дан массив с днями недели ['Понедельник', 'Вторник'...]. Сделайте так, что он начинался с воскресенья и заканчивался понедельником.
*/

// const dayWeek = [ 'Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'Суббота' , 'Воскресенье'];
// dayWeek.reverse();
// console.log(dayWeek)

/*
На split и join:
C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"
*/

// const arr = [3, 2, 1];
// const string = arr.join(" больше, чем ");
// console.log(string)

/*
Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
*/
// const string = 'я учу javascript!';
// const arr = string.split(' ');
// console.log(arr)

/*
В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
*/
// const date = '2025-12-31';
// const parts = date.split('-');
// const string = parts.reverse().join('.');
// console.log(string)

/*
На filter:
 Дан массив с числами. Оставьте в нем только отрицательные числа. В отдельную переменную положите количество отрицательных чисел в этом массиве.
*/
// const arr = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];
// const negativeNumbers = arr.filter((num) => {
//     return num < 0;
// });

// const negativArr = negativeNumbers.length;

// console.log(negativArr);
// console.log(negativeNumbers)

/*
Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
*/

// const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"];
// const string = languages.filter((str) => {
//     return str.length > 5
// })
// console.log(string)


/*
Палиндром 
*/
// const string = 'Was it a car or a cat I saw';

// const palidrom = (str) => {
//     const lowStr = str.toLowerCase().split(' ').join('');
//     let reversed = ''
//     for( let i = lowStr.length-1; i >= 0; i--) {
//         reversed += lowStr[i]
//     }
//     return lowStr === reversed
// }
// const result = palidrom(string)
// console.log(result)
