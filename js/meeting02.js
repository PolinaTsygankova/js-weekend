// -------------------------- Task 1 --------------------------------
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

// --------------------------------- Task 2 ---------------------
// function checkString() {
//   let isCheck;
//   let string = "abf";
//   let result;
//   result = string ?? 0;

//   if (result === 0) {
//     isCheck = false;
//     console.log(string);
//   } else {
//     isCheck = true;
//     console.log(string);
//   }
//   return isCheck;
// }
// console.log(checkString());

// ------------------------- Task 3 ----------------------------
// const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 || 42;
// console.log(baz);
// Expected output:

// ---------------------- Task 4 ---------------
// {
//   let x = "block scope";
// }
// сonsole.log(x);

// ---------------------Task 5 ---------------
// const arr = ['BEST', 'the', 'foo', 'is', 'JS']; розверніть
// масив, виріжіть "foo" і сберіть у рядок

// const arr = ["BEST", "the", "foo", "is", "JS"];
// function updateData(array, str) {
//   const newArr = [...array];
//   const reversArr = newArr.reverse();
//   const idxStr = reversArr.indexOf(str);
//   console.log(idxStr);
//   const dellStr = reversArr.splice(idxStr, 1);
//   console.log(dellStr);
//   const resultStr = reversArr.join(" ");
//   return resultStr;
// }
// console.log(updateData(arr, "foo"));
// console.log(arr);

// --------------- перероблюємо в 1-н рядочок (але треба ПАКУРИТЬ 😀)---------------------

// function updateData2(array, str) {
//   return [...array]
//     .slice(0, array.indexOf(str))
//     .concat(array.slice(array.indexOf(str) + 1))
//     .reverse()
//     .join(" ");
// }
// console.log(updateData2(arr, "foo"));
// console.log(arr);
