// ? task-1-2

// todo  reduce metodu ile
// const transactions = [
//   { type: "Debit", amount: 30 },
//   { type: "Credit", amount: 50 },
//   { type: "Credit", amount: 70 },
//   { type: "Debit", amount: 20 },
// ];

// ? task-1

// transactions.reduce((acc, object) => console.log(object.amount), 0);

// ? task 2
// let sum = transactions.reduce((acc, object) => acc + object.amount, 0);
// console.log(sum);

// todo for ile

// const transactions = [
//   { type: "Debit", amount: 30 },
//   { type: "Credit", amount: 50 },
//   { type: "Credit", amount: 70 },
//   { type: "Debit", amount: 20 },
// ];

// let sum = 0;
// for (let i = 0; i < transactions.length; i++) {
//   // ! task-1
//   console.log(transactions[i].amount);
//   //! task-2
//   sum += transactions[i].amount;
// }

// console.log(sum);

// ? task-3
//todo foreach  ile

// const people = [
//   { name: "John", hobbies: ["reading", "swimming", "cycling"] },
//   { name: "Jane", hobbies: ["painting", "dancing"] },
// ];

// people.forEach((objects) => {
//   objects.hobbies = objects.hobbies.join();
// });
// console.log(people);
// todo for ile

// const people = [
//   { name: "John", hobbies: ["reading", "swimming", "cycling"] },
//   { name: "Jane", hobbies: ["painting", "dancing"] },
// ];

// for (let i = 0; i < people.length; i++) {
//   let arr = people[i].hobbies;

//   people[i].hobbies = arr.join();
// }

// console.log(people);

// ? task-4
// todo filter ile
// const numbers = [1, 4, 7, 10, 13, 16];
// let newArr = numbers.filter((num, index) => index % 2 === 1);
// console.log(newArr);
// todo for ile
// const numbers = [1, 4, 7, 10, 13, 16];
// let newArr = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 1) {
//     newArr.push(numbers[i]);
//   }
// }
// console.log(newArr);

// ? task-5

// todo -  width foreach
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let result = [];
// arr.forEach((element) => {
//   element.forEach((item) => result.push(item));
// });
// console.log(result);

// todo for ile
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let araForm = [];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   araForm.push(arr[i]);
// }

// for (let j = 0; j < araForm.length; j++) {
//   // console.log(araForm[j]);
//   result.push(...araForm[j]);
// }

// console.log(result);
