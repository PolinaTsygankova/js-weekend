// Створіть функцію  generatePetCard,
// котра отримує  3 аргументи: kind, year, name
// Функція повинна повернути розмітку HTML:
// <li class="petCard">
//   <h2>Name Year</h2>
//   <p>Животное  Kind - Year рік народження. Вік творини - Years років.</p>
// </li>
// вірахувати вік тварини і якщо старше 1 року років інакше додаємо рік
// Створити новий нумерований список із класом pets
// Створити 4 картки для тварин, використовуючи функцію eneratePetCard
// Розмістити ці 4 картки у список з класом pets

// Розмістити список з класом pets на сторінку  DOM -  в DIV с класом container

// Додати кнопку Видалити  на кожну картку тварини

const petsList = [
    { kind: "Dog", year: 2015, name: "lassie" },
    { kind: "Cat", year: 2016, name: "einstein" },
    { kind: "Hedgehog", year: 2019, name: "elizabeth" },
    { kind: "Hamster", year: 2020, name: "alcatraz" },
];

function generatePetCard(kind, year, name){
   
    return `<li class="petCard">
    <h2>${name} ${year}</h2>
      <p>Тварина ${kind} - ${year} рік народження. Вік тварини -  ${agetostr(getAge(year))}.</p>
     </li>`
 }

 let petsOl = document.createElement("ol");
 petsOl = petsList.reduce((acc, {kind, year, name}) => {
    acc += generatePetCard(kind, year, name);
    return acc; 
 }, "");
 console.log(petsOl);

function getAge(year){
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    return age;
}

    function agetostr(age) {
        let txt;
        let count;
        count = age % 100;
        if (count >= 5 && count <= 20) {
            txt = 'років';
        } else {
            count = count % 10;
            if (count == 1) {
                txt = 'рік';
            } else if (count >= 2 && count <= 4) {
                txt = 'роки';
            } else {
                txt = 'років';
            }
        }
        return age+" "+txt;
    }

