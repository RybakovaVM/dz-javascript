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
//     alert('НЕТ')
 

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
// let sum = Number( prompt('enter the amount'));
// if (sum>=200 && sum<300){
//     console.log ('your discount is 3%')
// }else if(sum>=300 && sum <500){
//   console.log( 'your discount is 5%')
// }else if(sum>=500){
//     console.log('your discount is 7%')
// }

//8 task
//  const pi=3.14
// const s=0.25
// let L= Number(prompt('enter the length'));
// alert (L/pi) ;
// let  P=Number(prompt('enter the perimeter'));
// alert(P*s)
// if (L/pi<=P*s){
//     alert('окружность поместится в квадрат!') ;
//  }else{
//     alert('окружность не поместится в квадрат!') ;
//  }