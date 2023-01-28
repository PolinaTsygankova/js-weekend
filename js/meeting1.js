// В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// const userInfo = Number(prompt("Введіть число від 0 до 60"));

// if (userInfo >= 0 && userInfo <= 15) {
//    alert("Ваше число знаходиться у 1-й чверті");
// } else if (userInfo >= 16 && userInfo <= 30) {
//    alert("Ваше число знаходиться у 2-й чверті");
// } else if (userInfo >= 31 && userInfo <= 45) {
//    alert("Ваше число знаходиться у 3-й чверті");
// } else if (userInfo >= 46 && userInfo <= 60) {
//    alert("Ваше число знаходиться у 4-й чверті");
// } else if (isNaN(userInfo)) {
//    alert("Введіть, будь-ласка, число");
// } else {
//    alert("Ваші данні не валідні");
// }

// console.log(typeof userInfo);
// console.log(userInfo);

// Task2

// Напишите цикл, который предлагает ввести
// число больше 100 через

let userInput = Number(prompt("введите число больше 100"));
let check;
//   alert("Please enter number");
do {
  //   if (isNaN(userInput) || userInput < 100) {
  //     check = true;
  //     userInput = Number(prompt("Your data is invalid"));
  //   } else {
  //     check = false;
  //     alert("You enter 100");
  //   }

  if (userInput > 100) {
    check = false;
    alert("You enter 100 or more");
  } else if (isNaN(userInput)) {
    check = true;
    userInput = Number(prompt("It's not a number"));
  } else {
    check = true;
    userInput = Number(prompt("Your data is invalid"));
  }
} while (check);
