// const addName = function (...arg) {
//     console.log(arg);
// };

// addName(1, 3, 4, 67, 55);

// addName(2, 56, 87,);

// callback

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function showOk() {
//     console.log("You say ok");
// }

// function showCancel() {
//     console.log("You say No");
// }

// ask("Yes or no?", showOk, showCancel);

// hof

// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//     const name = "Ivan";
//     callback(name);
// };

// searchName(hello);

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello");
//     }
//      return console.log("GoodBye");
// }

// checkAge(1);

// function showMovie(age) {
//     if (age < 21) {
//         return
//     }
//     return console.log("Go to movie!");
// }

// showMovie(22);

// стрілкові функції

// const test = (arg) => {
//     console.log(arg);
// };

// test("lock it");

// const showMovie = (age) => {
//     if (age >= 21) {
//         return console.log("hello");
//     }
//      return console.log("Go home little!");
// };

// showMovie (12);

// console.log(document);


// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener('click', () => {
//     console.log(numberRef.value);
// });

// const addNumber = (number) => {
//     let summ = Number(number) + 10
//     return console.log(summ);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener('click', () => addNumber(numberRef.value)); 