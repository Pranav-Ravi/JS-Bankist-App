'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements) {
  //sets the existing contents of the container to null
  containerMovements.innerHTML = '';

  //sets the value of variable type based on the number
  movements.forEach(function(mov, i) {
    const type = mov>0 ? 'deposit' : 'withdrawal';

    //create the html element
    const html = `
      <div class="movements__row">
        <div class="movements__type 
        movements__type--${type}">
        ${i+1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div> 
    `;

    //add the html element into the webpage
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//Create new username using the first letters in full name
const createUsernames = function(acc) {
  acc.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name =>
      name[0]
    ).join('');
  })
};
createUsernames(accounts);
console.log(accounts);

const calcDisplayBal = function(movements) {
  const balance = movements.reduce((acc, mov) => acc
  + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/**********************CODING CHALLENGE***********************/
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8 ,3];

const checkdogs = function(dogsJulie, dogsKate) {
  //remove the unwated elements
  const dogsJulieCorrected = dogsJulie.slice();
  dogsJulieCorrected.splice(0, 1);
  dogsJulieCorrected.splice(-2);

  //array with data from oth Kate and Julia
  const dogAges = dogsKate.concat(juliaData);

  dogAges.forEach(function(age, i) {
    //check it's a puppy or dog
    if(age > 3) {
      console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i+1} is still a puppy`);
    }
  });
};

checkdogs(juliaData, kateData);


/*
  The main difference between map and forEach is that,
  1. map method creates a new array and returns values
  2. forEach just alter the same array and doesn't return any values
*/


/****************************Functional Programming****************************/

//conversion from euro to usd
const euroToUsd = 1.1;

//There are two ways to do this,
// 1. Using functional programming
/*const movementsToUsd = movements.map((mov)=> {mov * euroToUsd;});
console.log(movementsToUsd);*/

// 2. Using for loops to push the values into a manually created new array
const movementsToUsd = [];
for(const mov of movements) movementsToUsd.push(mov * euroToUsd);

const movementsDescriptions = movements.map(
  (mov, i) => 
  `Movement ${i+1}: You ${mov>0 ? 'deposited' :
  'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

/*
  Filter Method selects the elements that passes the condition that is passed
  in, and create a new array with it.
*/

////////////Using filter method to find only the deposits/////////////
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

////////////Using filter method to find only the withdrawals/////////////
const withdrawals = movements.filter(function(mov) {
  return mov < 0;
});
console.log(withdrawals);

/**************REDUCE METHOD**************/
//It accumulates the value of all elements in an array in to a single value.
//accumulator -> SNOWBALL
//It has mainly two parameters, 
//1. The function that takes accumulator, current, index and array values
//2. The initial value of the accumulator

const balance = movements.reduce(function(acc, cur) {
  return acc + cur;
}, 0); 
console.log(balance);

//same using the for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);