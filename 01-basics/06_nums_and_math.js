// node 01_basics/06_nums_and_math.js // for run the code 


const score = 400
// console.log(score);
// console.log(typeof(score));
 
const balance = new Number (100)
// console.log(balance);
// console.log(typeof(balance));

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // fixed ker skte hai value ko 

const othernumber = 333.55787
// console.log(othernumber.toPrecision(7)); //precision me priority decimal se phele wale ko mila gyi //apne calculation or value per depandancy honi chihye 

const hundereds = 100000
// console.log(hundereds.toLocaleString('en-In'));//is me ye [,] lga dega like[1,00,000]

//+++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// abs means absulute is me only(-) value ko postive me ker deta hai 
// console.log(Math.round(4.6));//is me round off ker ke deta hai jse 4.6 ka 4 kerdegya 
// console.log(Math.ceil(2.2)); // is me jse input 2 hai or output ek no bda aaya gya jse 3 
// console.log(Math.floor(6.2));// is me first value he aaya gi same 
// console.log(Math.sqrt(25));// squareroot calculation formula 
// console.log(Math.pow(2));//
// console.log(Math.min(2,4,7,8,9));// find ker skte hai ke arry me sabse lowest value
// console.log(Math.max(2,4,7,8,9));// find ker skte arry me sabse badi value 

// console.log(Math.random());//is me value 0 or 1 he aati hai 
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

//  const min = 10
//  const max = 20

//  console.log(Math.floor(math.random() * (max - min +1)) + min )

// console.log(Math.random());//-----------------------------------------------------------------------------|
// console.log((Math.random()*10) + 1);// -------------------------------------------------------------------|---> METHOD 1
// console.log(Math.floor(Math.random()*10) + 1);//----------------------------------------------------------|

const min = 10//--------------------------------------------------------------------|
const max = 20// -------------------------------------------------------------------|---> METHOD 2
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // ------------------|

// =========================================================================== by chai aur code ===============================================================================
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
