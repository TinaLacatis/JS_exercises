function fibonacci(n) {

    var fibonacciArray = [];
    if (n === 1) {
        fibonacciArray = [0];
    } else if (n === 2) {
        fibonacciArray = [0, 1];
    } else {
        fibonacciArray = [0, 1];

        for (var i = 2; i < n; i++) {
            fibonacciArray.push(fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1]);
        }
    }
    return fibonacciArray;
}
fibonacciArray = fibonacci(5);
console.log(fibonacciArray);

//------------------------------------------------------------------- BOTTLES OF BEER -------------------------------------------------------------------------------------------------
var nrBottles = 99;

function beer() {
    while (nrBottles >= 0) {
        lessBottles = nrBottles - 1;
        if (nrBottles > 2) {
            console.log(nrBottles + " bottles of beer on the wall, " + nrBottles + " bottles of beer. Take one down and pass it around, " + lessBottles + " bottles of beer on the wall.");
        } else if (nrBottles === 2) {
            console.log(nrBottles + " bottles of beer on the wall, " + nrBottles + " bottles of beer. Take one down and pass it around, " + lessBottles + " bottle of beer on the wall.");
        } else if (nrBottles === 1) {
            console.log(nrBottles + " bottle of beer on the wall, " + nrBottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        } else if (nrBottles === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        nrBottles--;
    }
}
beer();


//------------------------------------------------------------------- RANDOME NAME FROM A LIST -------------------------------------------------------------------------------------------------

var names = ["Angela", "Jake", "Pen", "James", "Lara", "Jason"];
function whoIsPaying(names) {
    var pay = Math.random() * names.length;
    pay = Math.floor(pay);
    return (names[pay] + " is going to buy lunch today!");
}
whoIsPaying(names);

// chose a random name from an array but not as a function
var names = ["Angela", "Jake", "Pen", "James", "Lara", "Jason"];
var pay = Math.round(Math.random() * names.length);
alert(names[pay] + " is going to buy lunch today!")


//------------------------------------------------------------------- FIZZBUZZ GAME -------------------------------------------------------------------------------------------------

// function with FOR
var output = [];

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }
    }
    console.log(output);
}
fizzBuzz();

// function with WHILE
var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

// the easy function of the FIZZBUZZ game/ funtion with IF
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}


//------------------------------------------------------------------- CHECK PARTY GUEST NAMES -------------------------------------------------------------------------------------------------
var guestList = ["Angela", "Jake", "Pen", "James", "Lara", "Jason"];
var yourName = prompt("What is your name?: ");

if (guestList.includes(yourName)) {
    alert("Nice to see you " + yourName + "!");
} else {
    alert("Sorry " + yourName + ", you are not invited.");
}


//------------------------------------------------------------------- LEAP YEAR -------------------------------------------------------------------------------------------------

// leap year
function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}
isLeap(2400);


//------------------------------------------------------------- LOVE CALCULATOR -------------------------------------------------------------------------------------------------------

// love calculator between 1 to 100 % - different messages with IF
var name = prompt("Enter your name: ");
var crush = prompt("Enter your crush: ");

var love = Math.random() * 100;
love = Math.floor(love) + 1;

if (love > 70) {
    alert("Your love score is " + love + "%. You love eachother like Kanye loves Kanye.");
} else if (love > 30 && love <= 70) {
    alert("Your love score is " + love + "%.");
} else {
    alert("Your love score is " + love + "%. You go together like water and oil.");
}


// love calculator between 1 to 100 % - general
var nameYou = prompt("Enter your name: ");
var crush = prompt("Enter your crush: ");
var love = Math.random() * 100;
love = Math.floor(love) + 1;
alert(nameYou + " + " + crush + " = " + love + " % love.");


//-------------------------------------------------------------- RANDOM DICE ------------------------------------------------------------------------------------------------------

// simulate a dice with random numbers from 1 to 6
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);


//----------------------------------------------------------------- BMI CALCULATOR ---------------------------------------------------------------------------------------------------

// calculate BMI calculator

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation;
}

bmiCalculator(20, 1.8);

// ###################################################### 1st way to call the function
function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / (height * height));
    return bmi;
}
bmiCalculator(65, 1.8);

// ########################################################### 2nd way to call the function
function bmiCalculator(weight, height) {
    var formula = Math.round(weight / Math.pow(height, 2)); // another way to calculate height* height
    return formula;
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);


//------------------------------------------------------------------------- YEARS LEFT TILL  90 -------------------------------------------------------------------------------------------

// check how many days, weeks and months left until 90 for a 51 old person 
function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.
    var years = 90 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
    /*************Don't change the code below**********/
}
lifeInWeeks(51);


//--------------------------------------------------------------- BUY BOTTLE OF MILK + REST OF MONEY -----------------------------------------------------------------------------------------------------

// buy n booltes of Milk with a specific number of money
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var bottles = Math.floor(money / 1.5); // I round the final number of bootles to be a round number and not with ,
    console.log("you can buy " + bottles + " bottles of Milk") //=> you can buy 2 bottles of milk
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5; // returns the rest of the money we should get back after we bought a number of milk bottles
}
var change = getMilk(4);
console.log(change); // returns the rest we receive



function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("you can buy " + calcBottles(money, costPerBottle) + " bottles of Milk") //=> you can buy 2 bottles of milk

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, costPerBottle); // returns the rest of the money we should get back after we bought a number of milk bottles
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}
console.log("Here is your " + getMilk(5, 1.5) + " change.");


//-------------------------------------------------------------------- ROBOT KAREL ------------------------------------------------------------------------------------------------

// https://web.stanford.edu/~cpiech/karel/ide.html
function main() {
    goToTheRight();
    goToTheLeft();
    moveTurnRightTwicePutBeeper();
    goToTheRight();
    goToTheLeft();
    moveTurnRightTwicePutBeeper();
    goToTheRight();
}
function goToTheRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}
function goToTheLeft() {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function moveTurnRightTwicePutBeeper() {
    move();
    turnRight();
    move();
    turnRight();
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4. FIRST LETTER OF NAME IS CAPITALISED 

//write the name
var name = prompt("Write your name:"); // tina, TINA, tiNA
//take the first letter of the name
var firstLetter = name.slice(0, 1);
//capitalise the first letter of the name
var upperCaseFirstLetter = firstLetter.toUpperCase();
//isolate the rest of the name
var restOfName = name.slice(1, name.length);
//write the rest of the name in lower case
restOfName = restOfName.toLowerCase();
// concacrenate the first letter of the name and the rest of the name
var finalName = upperCaseFirstLetter + restOfName;
alert("Hello " + finalName);// => Tina 


// 3. I take the text you write and I cut it when you have achieved the 140 characters
var message = prompt("Write a message:"); // you write the text
var messageUnder140 = message.slice(0, 140); // i take the text and cut it until the 140th character
alert(messageUnder140);


// 2. how to cut a letter/ more letters from a word
var numele = "Tina";
numele.slice(0, 2); // => Ti


// 1. You write a message and I count the length of the message and I say how many characters did you write and how many charater you still have left
var message = prompt("Write a message:"); // you write the text: text text ....
var messageCount = message.length; // I count the text lenght
alert("You have writen " + messageCount + " characterts, you have " + (140 - messageCount) + " characters left."); //=> You have writen 57 characterts, you have 12 characters left.
