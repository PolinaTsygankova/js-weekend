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

const isPalendrom = () => {
    const userStr = prompt('Введіть рядок');
    const normUserData = userStr.toLowerCase()
        // .replace(/[^\w\s]|_/g, ' ')
        .split(' ').join('')
    console.log(normUserData);
    const normUserDataRev = normUserData.split('').reverse().join('');
    if( normUserData === normUserDataRev)
    {
return true;
    }
    else 
    return false;
};

console.log(isPalendrom());
