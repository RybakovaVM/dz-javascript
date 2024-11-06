//1 task
let otvet ="";
  let numberTest = prompt("Сколько тебе лет?");
  

  if (number <= 18 && number >= 12) {
    console.log("Вы подросток");
    otvet = "подросток";
  }
  else if (number >= 0 && number <= 2) {
    console.log("Вы ребенок");
        otvet = "младенец";
  }
  else if (number > 18 && number <= 60 ) {
    console.log("Взрослый");
        otvet = "Взрослый";
  }
  else {
    console.log("Пожилой")
            otvet = "Пожилой";
  }
