"use strict;";
// Filter function accepts a callback function and creates a new array
// The callback function should return a boolean value based on the filteration criteria

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultArr = arr.filter((number) => number % 2 == 0);
console.log(resultArr);
const currency = "EUR";
let users = [
  {
    name: "john smith",
    pin: 1234,
    account_number: "ABC1234",
    transactions: [
      {
        date: "01/01/2021",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: -50,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "Peter Parker",
    pin: 1234,
    account_number: "ABC1235",
    transactions: [
      {
        date: "01/01/2021",
        amount: 2000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -1500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: -150,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "merry JANE",
    pin: 1234,
    account_number: "ABC1236",
    transactions: [
      {
        date: "01/01/2021",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -250,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 900,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: 350,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "john cena",
    pin: 1234,
    account_number: "ABC1237",
    transactions: [
      {
        date: "01/01/2021",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: -50,
        comment: "Some random amount transfer.",
      },
    ],
  },
];

const createUsername = (user) => {
  let words = user.name.toLowerCase().split(" ");
  // Map creates a new array with the initials which can be used further to create username
  let initials = words
    .map(function (word) {
      return word[0];
    })
    .join("");
  user.username = initials;
};

const formatAmount = (amount) => `${currency} ${amount}`;

const formatUser = (user) => {
  user.name = user.name.toUpperCase();
  createUsername(user);
  user.transactions.forEach((transaction) => {
    transaction.desctiption = `${user.name} has ${
      transaction.amount > 0 ? "deposited" : "withdrew"
    } ${formatAmount(Math.abs(transaction.amount))} on ${transaction.date}`;
  });
};
// Use forEach where no new array is required
users.forEach(formatUser);
// get users with username "js"
console.log(...users.filter((user) => user.username == "js"));
