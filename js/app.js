console.log("script.js is working!");

// -------------------------------------------------------------------------

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// -------------------------------------------------------------------------

// write your own for loop up to and including 100
for (var i = 0; i < 101; i+=2) {
  console.log(i);
}

console.log("hello world!"[4]);


// -------------------------------------------------------------------------


function sayHi() {
  console.log('hi');
}

//ALWAYS CALL YOUR function
sayHi();

// -------------------------------------------------------------------------


//Define Function
function sum(x,y) {
  console.log(x + y);
}

//CALL
sum(20,999);

// -------------------------------------------------------------------------

function multiply(x,y) {
  console.log(x * y);
}

multiply(2,4);

// -------------------------------------------------------------------------

//DATA TYPES  / different types of variables
var num = 6;
var str ='6';
var bool = false;
var obj = {
  name: 'brian',
  job: 'pizza guy'
};

var arr = ['cat', 'hat', 'bat', 'rat'];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// -------------------------------------------------------------------------

//LOGICAL OPERATORS
 console.log(true || false);
 console.log(true && false);

 var a = '6';
 var b = 6;

console.log(a == b);

// -------------------------------------------------------------------------

//CONDITIONAL STATEMENTS
var myName = 'Tony';

var yourName = 'not Tony';

if(myName === yourName){  // is this true?
  console.log('same name!!!');  // if true do this
}else {
  console.log('try again'); //if it is NOT true: do this
}

// -------------------------------------------------------------------------


//write an if/esle statement:
//if the asnwer is your age
//console log 'WINNER'
// else console log 'TRY AGAIN'

var answer = prompt ('What is your age?');

//This works but if we needed a NUMBER as a data type than it wouldn't work
// if (answer === '34') {
//   console.log('WINNER');
// }else {
//   console.log('LOSER');
// }


var answer = prompt ('What is your age?');
if parseInt(answer) === 34) {
  console.log('WINNER');
}else {
  console.log('LOSER');
}
