//1 task
// let a = 0
// function fn1task(b, c){
//     if(b<c){
//         a = -1
//     }else if(b>c){
//         a=1
//     }
//     return a
// }
// console.log(fn1task(6, 6));

// debugger
//     let a = 1
//     for (let i=1; i<=n; i++){
//     a=a*i
//     }
//     return a
// }
// console.log(factorial(0));

//2 task РЕКУРСИЯ!!!     ////////СПРАШИВАЮТ///////////
// function factorial(n){
//     return n ? n * factorial(n-1) : 1
// }
// console.log(factorial(5));

//3 task
// function square(a, b, c) {
//     return Number(`${a}`+`${b}`+`${c}`)
// }
// console.log(square(1, 4, 9)); 

//4 task
// let findS = (a, b = a) => a * b
// console.log(findS(3));

//5 task
// function perfectNumber(a) {
//     let summ = 0;
//     for (let i = 1; i < a; i++) {
//       if (a % i == 0) {
//         summ += i;
//       }
//     }
//     if (summ == a) {
//       return summ;
//     }
//   }
//   console.log(perfectNumber(6));
  
//6 task
// function minMax(min, max) {
//     let findArr = []
//     for (let i = min; i <= max; i++) {
//         if(perfectNumber(i)){  //true 6 28      false underfaned
//         findArr.push(i)
//         } 
//     }
//     return findArr
// }
// console.log(minMax(4, 100))

//7 task
// let time = (h, m="00", s="00") => `${h}:${m}:${s}`
// function time(h, m="00", s="00"){
//     return(`${h}:${m}:${s}`)
// // }
// console.log(time(21,27));


//8 task
// function time(h, m, s) {
//     return h * 3600 + m * 60 + s;
// }
// console.log(time(21, 37, 45))

//9 task
// function time(s) {
//     let h =  Math.floor(s / 3600)
//     s %= 3600
//     let m = Math.floor(s / 60)
//     let sec = s % 60
//     return `${h}:${m}:${sec}`
// }
// console.log(time(77865))

// //10 task
// function dateDifference(year1, month1, day1, year2, month2, day2) {
//     const date1 = new Date(year1, month1 - 1, day1);
//     const date2 = new Date(year2, month2 - 1, day2);
//     const diffInSeconds = Math.abs((date2 - date1) / 1000);
//     return time(diffInSeconds);
// }
// console.log(dateDifference(2023, 1, 1, 2024, 1, 3)); 