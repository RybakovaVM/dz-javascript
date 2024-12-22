    //1 task
// let age = prompt('Введите ваш возраст', 0)

//     if(age>=0 && age<=2) 
//         console.log('Вы ребенок');
//     else if(age>=12 && age<=18) 
//         console.log('Вы подросток');
//     else if(age>18 && age<=60) 
//         console.log('Вы взрослый');
//     else if(age>60) 
//         console.log('Вы пенсионер');

    //2 task
// let numbers = prompt('Введите от 0 до 9');
//     if(numbers == 0){
//         alert(')')
//     }else if (numbers == 1){
//         alert('!')
//     }else if  (numbers == 2){
//         alert('@')
//     }else if  (numbers == 3){
//         alert('#')
//     }else if  (numbers == 4){
//         alert('$')
//     }else if  (numbers == 5){
//         alert('%')
//     }else if  (numbers == 6){
//         alert('^')
//     }else if  (numbers == 7){
//         alert('&')
//     }else if  (numbers == 8){
//         alert('*')
//     }else if  (numbers == 9){
//         alert('(')
//     }
          //2.2 task
// x = +prompt('Введите от 0 до 9');
//  var num = "";
// switch(x){
//     case "1": num += "!";
//     case "2": num += "@";
//     case "3": num += "#";
//     case "4": num += "$";
//     case "5": num += "%";
//     case "6": num += "^";
//     case "7": num += "&";
//     case "8": num += "*";
//     case "9": num += "(";
//     case "0": num += ")";
//     default: num += "Попробуйте еще раз";
// }
// alert(num);

    //3 task
// let num = prompt('Введите трехзначное число')
// let arrNum = num.split('')

// // console.log(num);
// // console.log(arrNum);
// // console.log(arrNum[0])
// // console.log(arrNum[1])
// // console.log(arrNum[2])
// if(arrNum[0] === arrNum[1]){
//     alert('Совпадение есть')
// }
// else if(arrNum[2] === arrNum[0]){
//     alert('Совпадение есть')
// }
// else if(arrNum[1] === arrNum[2]){
//     alert('Совпадение есть')
// }
// else{
//     alert('нет')
// }

    //4 task
// let year = prompt('введите год')
// if(year % 400 == 0){
//     console.log('Високосный')
// }
// if(year % 4 == 0){
//     console.log('Високосный')
// }
// else if(year % 100 != 0){
//     console.log('не високосный')
// }

//5 task
// let numPalindrom = prompt('Введите пятиразрядное число')
// let arrNum = numPalindrom.split('')
// // if(arrNum[0] ===arrNum[4]){
// //         alert('Палиндром')
// //     }
// //      if(arrNum[2] === arrNum[3]){
// //         alert('Палиндром')
// //     }
// //      if(arrNum[3] === arrNum[1]){
// //         alert('Палиндром')}
// // else if(arrNum[0] != arrNum[4]){
// //     alert("нет");
// // }
// // else if(arrNum[3] != arrNum[1]){
// //     alert("нет");
// // }
// // else if(arrNum[3] != arrNum[2]){
// //     alert("нет");
// // }
// // else if(arrNum[3] != arrNum[4]){
// //     alert("нет");
// // }
// // else if(arrNum[0] != arrNum[4]){
// //     alert("нет");
// // }
// if (arrNum[0] === arrNum[4] && arrNum[1] === arrNum[3]){
//     console.log('Палиндром');
// }


//6 task
// const euro= 1.05
// const uan=0.13
// const azn=0.58
// let num = Number(prompt ('enter USD'));
// console.log(num*1.05);
//  console.log(num*0.13);
//  console.log(num*0.58)

//7 task
// let sum = Number( prompt('Введите сумму'));
// if (sum>=200 && sum<300){
//     console.log ('Ваша скидка составляет 3%')
// }else if(sum>=300 && sum <500){
//   console.log( 'Ваша скидка составляет 5%')
// }else if(sum>=500){
//     console.log('Ваша скидка составляет 7%')
// }

//8 task
// const pi=3.14
// const s=0.25
// let L= Number(prompt('введите длину'));
// alert (L/pi);
// let  P=Number(prompt('введите периметр'));
// alert(P*s)
// if (L/pi<=P*s){
//     alert('окружность поместится в квадрат!');
// }else{
//     alert('окружность не поместится в квадрат!');
// }

//9 task
// let otvet = "";
// let score = 0;
// let bool1 = false;
// function victorina2(){
//     let vopros1 = confirm("2+2=4?");
//     otvet = vopros1;
//     if (otvet) {
//     otvetVerni()
//     }
//     else{
//       alert ("не верно!");
//     }
  
// console.log("очки=" + score );
//     let vopros2 = confirm("в году 12 месяцев?");
//     otvet = vopros2;
//     if (otvet) {
//     otvetVerni()
//     }
//     else{
//       alert ("не верно!");
//     }
// console.log("очки=" + score);
//     let vopros3 = prompt("Кто написал Войну и мир?");
//     otvet = vopros3;
//     if (otvet == "Лев Николаевич Толстой" || otvet == "Толстой") {
//     otvetVerni()
//     }
//     else{
//       alert ("не верно!");
//     }
// console.log("очки=" + score);
// }
//   function otvetVerni(){
//         alert ("верно!");
//       score=score+2;
//     }
//     victorina2()

//10 task
// var date = Math.abs(
//     Math.floor(Number(prompt("Введите число месяца от 1 до 31: "))));
// var month = Math.abs(
//     Math.floor(Number(prompt("Введите порядковый номер месяца от 1 до 12: "))));
// var year = Math.floor(Number(prompt("Введите год: ")));

// if (date < 1 || date > 31 || month < 1 || month > 12) {
//     date = 1;
//     month = 1;
//     alert(
//       "Вы некорректно указали день либо порядковый номер месяца.");
//   }
  
//   if ((month < 10) & (date < 10)) {
//     alert(`Вы запросили дату 0${date}.0${month}.${year}, если ошиблись при вводе, обновите страницу`);
//     }else if ((month > 9) & (date < 10)) {
//     alert(`Вы запросили дату 0${date}.${month}.${year}, если ошиблись при вводе, обновите страницу`);
//     }else if ((month < 10) & (date > 9)) {
//     alert(`Вы запросили дату ${date}.0${month}.${year}, если ошиблись при вводе, обновите страницу`);
//     }else {
//     alert( `Вы запросили дату ${date}.${month}.${year}, если ошиблись при вводе, обновите страницу`);
// }
// var leap_year = Number(0);
// if ((year % 4 == 0) & (year % 100 != 0) || year % 400 == 0) {
//     leap_year = 1;
//     alert("Введенный вами год является високосным");
// }
// var new_date = date;
// var new_month = month;
// var new_year = year;
// new_date += 1;
// if ((new_date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
//     new_date = 1;
//     new_month += 1;
// }
// if (
//     (new_date > 31) &
//     (month == 1 ||
//       month == 3 ||
//       month == 5 ||
//       month == 7 ||
//       month == 8 ||
//       month == 10)
//     ){
//     new_date = 1;
//     new_month += 1;
// }
//     if((new_date > 31) & (month == 12)) {
//     new_date = 1;
//     new_month = 1;
//     new_year += 1;
// }
// if ((new_date > 28) & (month == 2) & (leap_year == 0)) {
//     new_date = 1;
//     new_month = 3;
// }
  
// if ((new_date > 29) & (month == 2) & (leap_year == 1)) {
//     new_date = 1;
//     new_month = 3;
// }
  
// if ((date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
//     date = 0;
// }
// if (
//     (date > 31) &
//     (month == 1 ||
//       month == 3 ||
//       month == 5 ||
//       month == 7 ||
//       month == 8 ||
//       month == 10 ||
//       month == 12)
//     ){
//     date = 0;
// }
// if ((date > 28) & ((month == 2) & (leap_year == 0))) {
//     date = 0;
// } 
// if ((date > 29) & ((month == 2) & (leap_year == 1))) {
//     date = 0;
// }
// if (date == 0) {
//     alert("Вы ввели некорректную дату, обновите страницу и попробуйте снова");
// } else {
// if ((new_month < 10) & (new_date < 10)) {
//       alert(`Следующая дата 0${new_date}.0${new_month}.${new_year}`);
//     } else if ((new_month > 9) & (new_date < 10)) {
//       alert(`Следующая дата 0${new_date}.${new_month}.${new_year}`);
//     } else if ((new_month < 10) & (new_date > 9)) {
//       alert(`Следующая дата ${new_date}.0${new_month}.${new_year}`);
//     } else {
//       alert(`Следующая дата ${new_date}.${new_month}.${new_year}`);
//     }
// }