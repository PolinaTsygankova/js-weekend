// *? Напиши функцію конструктор User для

// *? створення користувача з такими властивостями:

// *? a. userName - ім'я, рядок

// *? b. age - вік, число

// *? c. numbersOfPost - кількість постів, число

// *? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

// *? Додай метод getInfo(), який повертає рядок:

// *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

function User(userObject) {
  const { userName, age, numbersOfPost } = userObject;
  this.userName = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;

  this.getInfo = function () {
    console.log(
      `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
    );
  };
}

const mango = new User({ userName: 'Mango', age: 36, numbersOfPost: 10 });
const zina = new User({ userName: 'Zina', age: 26, numbersOfPost: 5 });

console.log('🚀 ~ zina:', zina);

console.log('🚀 ~ newUser:', mango);

//? -------------Task 2 -------------

// Створіть клас Адмін із конструктором, імʼя, пароль.
// Додати гетер та сетер на пароль, та методи шифтування та перевірки

class Admin {
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    this.reversePassword = this.#password.split('').reverse().join('');
  }

  get name() {
    return this.#name;
  }

  //* Розшифровуємо пароль
  get password() {
    return this.reversePassword;
  }

  //* Зашифровуємо пароль
  set password(newPassword) {
    this.#password = newPassword.split('').reverse().join('');
  }

  checkPassword(newPassword) {
    if (this.reversePassword === newPassword) {
      console.log('Check is valid');
    } else {
      console.log('You are a stranger');
    }
  }

  changePassword(oldPassword, newPassword) {
    if (this.reversePassword === oldPassword) {
      this.#password = newPassword.split('').reverse().join('');
    } else {
      console.log('Your old password is wrong!');
    }
  }
}

const mango = new Admin('Mango', 'sdvsjdnvskld');
console.log(mango);
console.log(mango.name);

console.log(mango.password);
// console.log(mango.password('Poly'));
