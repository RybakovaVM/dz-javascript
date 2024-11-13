//1 task
// let name = prompt('Как тебя зовут?')
// alert('Привет ' + name)

//2 task
// let number1 = 2024
// let number2 = prompt('Укажите год своего рождения')
// alert(number1 - number2)

//3 task
// let number = prompt('Укажите длину стороны квадрата')
// alert(number*4)

//4 task
// let number1 =3.14
// let number2 = prompt('Укажите радиус окружности')
// alert(number1 * number2**2)

//5 task
// let number1 = prompt('Укажите расстояние в км')
// let number2 = prompt('Укажите время в часах')
// alert(number1 / number2)

//6 task
// let number1 = prompt('Укажите сумму долларов')
// let number2 = 0.91937
// alert(number1*number2)

//7 task
// let number1 = prompt('Укажите объем флешки в гб')
// let number2 = 1000
// let number3 = 1024
// alert(number1*number2/number3)

//8 task
// let number1 = prompt('Укажите сколько у вас денег в кошельке')
// let number2 = prompt('Укажите сколько стоит 1 шоколадка')
// console.log(result= Math.trunc(number1/number2))
// console.log(change=number1- result*number2)
// alert(  'можно купить '+ result + ' остаток '+ change)

//9 task
let number1 = prompt('Введите трёхзначное число: ')  
let a = Number(number1 % 10)
let b = Number((number1 - a) / 10 % 10)
let c = Number((number1 - a - b * 10) / 100)
alert('Перевёртыш: ' + (a * 100 + b * 10 + c))

//10 task
//let number = prompt('Введите число для проверки на четность: ');
//alert((parseInt(number) % 2 == 0) ? "четное" : "нечетное");

