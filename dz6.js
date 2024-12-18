//task 1
// let car = {
//     manufacturer: 'Russia',
//     model: 'mazda',
//     data: '19.11.2024',
//     middlespeed: '110kmph',
// }

// function goCar(a){
// console.log(a);
// }
// goCar(car)

// function travelTime(middlespeed, car, distant) {
//     // debugger
//     Math.floor(time=distant/middlespeed)
//    if(time>4){
//     time=time +Math.floor(time/4)
// }
// else if(time<4){time=time}
//    console.log(time);
   
// }
// travelTime(100, 5, 1500)


//task 2
// let fraction = {
//     nominator: 2,
//     denominator: 3,
//     addition: function(nominator, denominator) {
//       let sum = this.nominator / this.denominator + nominator / denominator;
//       alert("Sum of fractions is " + sum);
//     },
//     subtruction: function(nominator, denominator) {
//       let subtr = this.nominator / this.denominator - nominator / denominator;
//       alert(" Subtruction is: " + subtr);
//     },
//     product: function(nominator, denominator) {
//       let product_ =
//         (this.nominator / this.denominator) * (nominator / denominator);
//       alert("Product is " + product_);
//     },
//     division: function(nominator, denominator) {
//       let div = this.nominator / this.denominator / (nominator / denominator);
//       alert("Division of these fractions is " + div);
//     }
//   };
  
//   let nominator, denominator;
//   nominator = prompt("Enter a nominator: ");
//   denominator = prompt("Enter a denominator: ");
//   fraction.addition(nominator, denominator);
//   fraction.subtruction(nominator, denominator);
//   fraction.division(nominator, denominator);
//   fraction.product(nominator, denominator);


//task 3
// let time = {
//     hours: 12,
//     minutes: 45,
//     seconds: 17,
//     showTime: function() {
//       alert(`${this.hours}:${this.minutes}:${this.seconds}`);
//     },
//     addSeconds: function(seconds) {
//       if (seconds <= 0) {
//         alert("You entered incorrect time!");
//       } else if (seconds + this.seconds >= 60) {
//         let differenceMin = Math.floor((this.seconds + seconds) / 60);
//         this.seconds = (this.seconds + seconds) % 60;
//         this.addMinutes(differenceMin);
//       } else {
//         this.seconds += seconds;
//       }
//     },
//     addMinutes: function(minutes) {
//       if (minutes <= 0) {
//         alert("You entered incorrect time!!!");
//       } else if (this.minutes + minutes >= 60) {
//         let differenceHours = Math.floor((this.minutes + minutes) / 60);
//         this.minutes = (this.minutes + minutes) % 60;
//         this.addHours(differenceHours);
//       } else {
//         this.minutes += minutes;
//       }
//     },
//     addHours: function(hours) {
//       if (hours <= 0) {
//         alert("You entered incorrect time!");
//       } else if (hours + this.hours >= 24) {
//         this.hours = (this.hours + hours) % 24;
//       } else {
//         this.hours += hours;
//       }
//     }
//   };
  
//   time.showTime();
//   time.addHours(25);
//   time.showTime();
//   time.addMinutes(120);
//   time.showTime();
//   time.addSeconds(360);
//   time.showTime();