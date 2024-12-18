// let car = {
//     manufacturer: 'Russia',
//     model: 'mazda',
//     data: '19.11.2024',
//     middlespeed: '110kmph',
// }

// function goCar(a){
// console.log(a);
// }

// goCar(car.model)

//task 1
// function pow(x, n) {
//     if (n <= 0) {return 1}
//     else {return x * pow(x, n - 1)}
//   }
//   pow(5, 3)

//task 2
// function gcd(a, b) {
//     if (b === 0) {
//       return a;
//     } else {
//       return gcd(b, a % b);
//     }
//   }
//   let theGCD = gcd(12, 18);
// console.log(theGCD)

//task 3
// function task3() {
//     function maxNumber(a, maxDigit) {
//       if (a == 0) {
//         return maxDigit;
//       } else {
//         if (maxDigit < a % 10) {
//           maxDigit = a % 10;
//         }
//         return Math.trunc(maxNumber(a / 10, maxDigit));
//       }
//     }
//     let y = 0;
//     let x = Math.trunc(Math.abs(+prompt("Введите число")));
//     alert("Наибольшая цифра в данном числе " + maxNumber(x, y));
//   }
//   task3();

//task 4
// function task4() {
//     function primeNumber(a, b) {
//       if (a % b == 0 && b >= 2) {
//         return alert("Данное число не является простым.");
//       } else {
//         if (b == 1) {
//           return alert("Да, это простое число.");
//         }
//         return primeNumber(a, b - 1);
//       }
//     }
//     let x = 2;
//     do {
//      x = Math.trunc(Math.abs(+prompt("Введите натуральное число больше 2: ")));
//     } while (x <= 2);
//   let y = x - 1;
//   primeNumber(x, y);
// }
// task4();

//task 5
// function task5() {
//     function multiplier(a, b, c) {
//       if (b > a ** 0.5) {
//         c.push(a);
//         return c;
//       } else if (a % b == 0) {
//         c.push(b);
//         multiplier(a / b, b, c);
//       } else {
//         multiplier(a, b + 1, c);
//       }
//       return c.join("*");
//     }
//     let x = Math.trunc(+prompt("Введите число: "));
//   let y = 2;
//   let z = [];

//   alert(multiplier(x, y, z));
// }
// task5();

//task 6
// function task6() {
//     function fibonacci(a) {
//       if (a == 1 || a == 2) {
//         return 1;
//       }
//       return fibonacci(a - 1) + fibonacci(a - 2);
//     }
//     do {
//         x = Math.trunc(
//           +prompt("Введите порядковый номер числа из ряда Фибоначчи: ")
//         );
//       } while (x < 1);
    
//       alert(fibonacci(x));
//     }
//     task6();
