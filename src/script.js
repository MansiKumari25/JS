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
    if (val==12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  function testStrict(val) {
    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);


  function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);


  function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val> 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);


  function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  console.log(testGreaterOrEqual(10));


  function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  console.log(testLessThan(10));


  function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  console.log(testLessOrEqual(10));


  function testLogicalAnd(val) {
      
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    return "No";
  }
  
  console.log(testLogicalAnd(10));


  function testLogicalOr(val) {
    
    if (val < 10 || val > 20) {
      return "Outside";
    }
   else{
      return "Inside";
    }
  
    return "Inside";
  }
  
  testLogicalOr(15);


  function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else{
      result = "5 or Smaller";
    }
    return result;
  }
  
  console.log(testElse(4));

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if(val < 5) {
      return "Smaller than 5";
    }
   else{
  return "Between 5 and 10";
   }
    
  }
  
  testElseIf(7);


  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);


  function testSize(num) {
   
        if(num<5)
        {
            return "Tiny";
        }
        else if(num < 10)
        {
            return "Small";
        }
        else if(num < 15)
        {
            return "Medium";
        }
        else if(num < 20)
        {
            return "Large";
        }
        else{
            return "Huge";
        }
        
  }

  console.log(testSize(19));

  

 const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {  
  if(strokes===1)
  {
    return names[0];
  }
  else if(strokes <=par-2)
  {
    return names[1];
  }
  else if(strokes === (par-1))
  {
    return names[2];
  }
  else if(strokes ===(par))
  {
    return names[3];
  }
  else if(strokes ===(par+1))
  {
    return names[4];
  }
  else if(strokes ===(par+2))
  {
    return names[5];
  }
  else if(strokes >=(par+3))
  {
    return names[6];
  }
}
console.log(golfScore(5, 4));

function caseInSwitch(val) {
    let answer = "";
  switch(val){
    case 1: answer="alpha";
      break;
    case 2: answer="beta";
      break;
    case 3: answer="gamma";
      break;
    case 4: answer="delta";
      break;
  }
  
    return answer;
  }
  
  console.log(caseInSwitch(1));


  function switchOfStuff(val) {
    let answer = "";
  switch(val)
  {
    case 'a': answer="apple";
     break;
    case 'b': answer="bird";
     break
    case 'c': answer="cat";
     break;
    default: answer="stuff";
     break;
  }

    return answer;
  }
  
  console.log(switchOfStuff(1));


  function sequentialSizes(val) {
    let answer = "";
  switch(val)
  {
    case 1:
    case 2:
    case 3: answer= "Low";
      break;
    case 4:
    case 5:
    case 6: answer= "Mid";
      break;
    case 7:
    case 8:
    case 9: answer= "High";
      break;
  }
    return answer;
  }
  
  sequentialSizes(1);


  function chainToSwitch(val) {
    let answer = "";
  switch(val)
  {
    case "bob": answer = "Marley";
      break;
    case 42: answer = "The Answer";
      break
    case 1: answer = "There is no #1";
      break;
    case 99: answer = "Missed me by this much!";
      break;
    case 7: answer = "Ate Nine";
        break;
    
  }
    return answer;
  }
  
  chainToSwitch(7);


  function isLess(a, b) {
    switch(a<b)
    {
      case true: return true;
       break;
       case false: return false;
        break;
    }

  }
  
  isLess(10, 15);


  function abTest(a, b) {
    if(a <0 || b < 0)
    {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);





  let count = 0;

function cc(card) {
 
 switch(card)
 {
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
    count++;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
    break;  
 }
 if(count < 1)
 {
   return count+" Hold";
 }
 else if(count >= 1)
 {
   return count+" Bet";
 }
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const myDog = {
   
    name:  "Tom",
    legs: 4,
    tails: 1,
    friends: ["Jim", "Sam"]
  
  };


  const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  const hatValue = testObj.hat;      
  const shirtValue = testObj.shirt; 

  const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = testObj["an entree"];   
  const drinkValue = testObj["the drink"];    


  const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  const playerNumber = 16;  
  const player = testObj[playerNumber];   


  const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  

  myDog["name"]="Happy Coder";

  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark="woof";
  