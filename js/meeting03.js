// ---------task 1 -----------
// Напишіть функцію яка перевіряє рядок чи являється він паліндромом

// const isPalendrom = () => {
//     const userStr = prompt(
//         "Введіть рядок");
//     const normUserdata = userStr.toLowerCase()
//     .replace(/[!"#$%&'()*+,./:;<=>?@\\^_`{|}~]/g, " ")
//     .split(" ").join("")
//     console.log(normUserdata)

// };
// isPalendrom();

// const isPalendrom = () => {
//     const userStr = prompt('Введіть рядок');
//     const normUserData = userStr.toLowerCase()
//         // .replace(/[^\w\s]|_/g, ' ')
//         .split(' ').join('')
//     console.log(normUserData);
//     const normUserDataRev = normUserData.split('').reverse().join('');
//     if( normUserData === normUserDataRev)
//     {
// return true;
//     }
//     else
//     return false;
// };

// console.log(isPalendrom());

//* next task

//? Напишіть функцію для нормалізації дати

// const inputData = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
//   { id: 4, name: 'Item 4' },
//   { id: 7, name: 'Item 7' },
// ];

// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });

//1 Задача: створити функцію яка повертає результуючий обьект
//2 в цій функції будуть складові оьект дати і масив ідішників
//3 через перебераючій метод перебираемо масив, на кожному кроці циклу створюемо змінну яка зберікая іді, і додаемо ії в масив
//4 створюемо поле для обьекту дати по ключу айді і додаемо на кожному кроці циклу обьект з масиву
//5 створити в результуючий даті поля entities: і  byId:

// const normalizeData = array => {
//   const resultObjectData = {};
//   const objData = {};
//   const arrayId = [];

//   array.forEach(element => {
//     // let elemId = element.id;
//     arrayId.push(element.id);

//     console.log(arrayId);

//     objData[element.id] = element;
//   });

//   resaltObjectData['entities'] = objData;
//   resaltObjectData.byId = arrayId;

//   return resultObjectData;
// };

// console.log(normalizeData(inputData));

//
// !New task

// порахуйте всі позитивні або негативні значення і повертає обʼєкт даних
// 1. Створити функцію яка приймає масив, результатом є об'єкт позитивних та негативних значень
// 2. Використовуючи reduce на кожному кроці циклу ми перевіряємо позитивне чи негативне значення


// const nums = [-90, 45, 0, 16, -18, 24, -67, 43]

// const totalPosAndNegSum = function (arr) {
//   const resultObj = arr.reduce((arrAcc, element) => {
//     if (element > 0) {
//       return {
//         // ...arrAcc,
//         pos: arrAcc.pos + element,
//         neg: arrAcc.neg
//       };
//     } else {
//       return { ...arrAcc, neg: arrAcc.neg + element };
//   }
//   }, { pos: 0, neg: 0 })
//   return resultObj;
// }
// console.log(totalPosAndNegSum(nums));

// ! Приклад з kahoot

const numbers = [5, 10, 25, 15];
const arrayNumbers = numbers.reduce((acc, number) => { console.log('acc', acc); console.log('number', number); });
console.log(arrayNumbers);