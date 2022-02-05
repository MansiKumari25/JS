//I am an inline comment

/* I am  
a multi-line 
comment*/

var myName;
var a;
a=7;
var b;
b=7;
b=a;

var c=9;

var myFirstName="Mansi";
var myLastName="Kumari";

var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

let catName = "Oliver";
let catSound = "Meow!";

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

let sum = 10 + 10;
const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

let myVar = 87;
myVar = ++myVar;
console.log(myVar);

let myVar2 = 11;
myVar2 = --myVar2;
console.log(myVar2);

const myDecimal = 5.7;
const product2 = 2.0 * 2.5;

const quotient2 = 4.4/ 2.0; 
console.log(quotient2);

const remainder = 8%3;
console.log(remainder);


let a2 = 3;
let b2 = 17;
let c2 = 12;

a2 +=  12;
b2 += 9 ;
c2 += 7;


let a3 = 11;
let b3 = 9;
let c3 = 3;

a3 -= 6;
b3 -= 15;
c3 -=  1;

let a4 = 5;
let b4= 12;
let c4 = 4.6;

a4 *=  5;
b4 *= 3;
c4 *= 10;

let a5 = 48;
let b5 = 108;
let c5 = 33;


a5 /= 12;
b5 /= 4;
c5 /= 11;

const myStr2 = "I am a \"double quoted\" string inside \"double quotes\".";

const myStr3 = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr4 = "FirstLine\n\
\t\\SecondLine\n\
ThirdLine"; 
console.log(myStr4);

const myStr5 = "This is the start."+" This is the end."; 
console.log(myStr5);


let myStr6="This is the first sentence.";
myStr6 += " This is the second sentence."
console.log(myStr6);

const myName2 = "Mansi";
const myStr7 = "My name is "+ myName2+" and I am well!";
console.log(myStr7);

const someAdjective = " amazing, logical, cool.";
let myStr8 = "Learning to code is ";
myStr8 += someAdjective;
console.log(myStr8);

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

let firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0]; 
console.log(firstLetterOfLastName);

let myStr9 = "Jello World";
myStr9="Hello World";
console.log(myStr9);

const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);
const lastLetterOfLastName = lastName[lastName.length-1];
console.log(lastLetterOfLastName);
const secondToLastLetterOfLastName = lastName[lastName.length-2];
console.log(secondToLastLetterOfLastName);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb; 
console.log(wordBlanks);

const myArray = ["Hello", 10];
console.log(myArray);

const myArray2 = [["Apple", 67], ["Tom", "Jerry"]];
console.log(myArray2);

const myArray3= [50, 60, 70];
let myData=myArray3[0];
console.log(myData);

myArray3[0]=45;
console.log(myArray3);

const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  myData = myArray4[2][1];
  console.log(myData);


 const myArray5 = [["John", 23], ["cat", 2]];

myArray5.push(["dog", 3]);
console.log(myArray5);
let removedFromMyArray=myArray5.pop();
console.log(removedFromMyArray);
removedFromMyArray=myArray5.shift();
console.log(removedFromMyArray);
myArray5.unshift(["Paul", 35]);
console.log(myArray5);

const myList = [
    ["Chocolate", 10],
    ["Cakes", 20],
    ["IceCream", 5],
    ["Pizza", 30],
    ["Burger", 15]
  ];
  console.log(myList);


  function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

  function functionWithArgs(a, b)
{
  console.log(a+b);
}

functionWithArgs(1,2);


function timesFive(a)
{
  return a*5;
}
timesFive(5);


let myGlobal=10;

function fun1() {
oopsGlobal=5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


function myLocalScope() {
   let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);



  const outerWear = "T-Shirt";

function myOutfit() {
  let outerWear="sweater";
  return outerWear;
}

myOutfit();


 sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum +5;
}

console.log(addThree());
console.log(addFive());


let processed = processArg(7);

function processArg(num) {
  return (num + 3) / 5;
}
console.log(processed);




function nextInLine(arr, item) {
    
    arr.push(item);
    item=arr.shift();
    return item;
   
  }
  
  
  const testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  function welcomeToBooleans() {
     
    return true; 
  }
  console.log(welcomeToBooleans());


  function trueOrFalse(wasThatTrue) {
    if(wasThatTrue)
    {
      return "Yes, that was true";
    }
    else{
      return "No, that was false ";
    }
  }

  function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

