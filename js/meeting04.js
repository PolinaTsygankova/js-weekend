// *? Напиши функцію конструктор User для

// *? створення користувача з такими властивостями:

// *? a. userName - ім'я, рядок

// *? b. age - вік, число

// *? c. numbersOfPost - кількість постів, число

// *? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями



// *? Додай метод getInfo(), який повертає рядок:

// *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`


function User(userObject) {
    const {userName, age, numbersOfPost } = userObject;
    this.userName = userName;
    this.age = age;
    this.numbersOfPost = numbersOfPost;

    this.getInfo = function () {
        console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`);
    }
}



const mango = new User({ userName: "Mango", age: 36, numbersOfPost: 10 });
const zina = new User({ userName: "Zina", age: 26, numbersOfPost: 5 });

console.log("🚀 ~ zina:", zina)


console.log("🚀 ~ newUser:", mango)

