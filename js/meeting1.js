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

// let userInput = Number(prompt("введите число больше 100"));
// let check;
//   alert("Please enter number");
// do {
  //   if (isNaN(userInput) || userInput < 100) {
  //     check = true;
  //     userInput = Number(prompt("Your data is invalid"));
  //   } else {
  //     check = false;
  //     alert("You enter 100");
  //   }

//   const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }



// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// // console.log(message); // "Клиент с таким именем есть в базе данных!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const words = ["wwww", "eeeee", "fffff"]
// console.log(words);
// const offer = words.join(" ");
// console.log(offer);
// const words_2 = words.splice(" ");
// console.log(words_2);

//додайте "Маракуя" в кінець
// замініть значення "Борщ" на "Роли"
// видаліть перший елемент масиву та виведіть його в консоль
// додайте "Вассабі" та "Угорь" на початок масиву

// const menu = ["Суші", "Борщ"];
// menu.push("Маракуя");
// console.table(menu);
// menu.splice(1, 1, "Роли");
// console.table(menu);
// console.log(menu.shift());
// menu.unshift("Вассабі", "Угорь");

// console.table(menu);



function checkString(){
  let isCheck;
  let string  = 'abf';
  let result;
  result = string ?? 0;

  if(result === 0){
    isCheck = false;
    console.log(string);
  }
  else{
    isCheck = true;
    console.log(string);
  }
  return isCheck;
}
console.log(checkString());


// const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 || 42;
// console.log(baz);
// Expected output: 0
