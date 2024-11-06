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
let numbers = prompt('Введите от 0 до 9');
    if(numbers == 0){
        alert(')')
    }else if (numbers == 1){
        alert('!')
    }else if  (numbers == 2){
        alert('@')
    }else if  (numbers == 3){
        alert('#')
    }else if  (numbers == 4){
        alert('$')
    }else if  (numbers == 5){
        alert('%')
    }else if  (numbers == 6){
        alert('^')
    }else if  (numbers == 7){
        alert('&')
    }else if  (numbers == 8){
        alert('*')
    }else if  (numbers == 9){
        alert('(')
    }else if  (numbers > 9){
        alert('Больше 9 вводить нельзя !')
    }