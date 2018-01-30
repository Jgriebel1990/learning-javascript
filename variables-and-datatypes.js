// single line comment
/**
 * this is a multi-line comment
 */

//Variables
var name = "justin"; //old school javascript (99% of the time dont use this)
const fruit = "banana"; //constant binding (lock it in the cup) 
let veggie = "carrot"; //similar to var, but some other differences...
console.log("name: ", name); //print
console.log("fruit: ", fruit);
console.log("veggie: ", veggie);

//Simple Data Types
//Strings
const aString = "things and stuff";
//a string => spaces in variable names are.... BAD AS F!!!!!
//so we remove the space and capitalize all words but the first
// this is called camel casing CONVENTION!!!
const anotherString = 'some other things and stuff'; //this is single quotes
const stringWithNumbers = '1234.56.05055';
console.log('aString: ', aString);
console.log('anotherString: ', anotherString);
console.log('stringWithNumbers: ', stringWithNumbers);
console.log('what is the type of aString? ', typeof aString);
// Strings will come back up. There is more to know...
// Numbers
const aNumber = 1;
const anotherNumber = 3.5;
console.log('aNumber: ', aNumber);
console.log('anotherNumber: ', anotherNumber);
console.log('type of aNumber: ', typeof aNumber);
console.log('type of anotherNumber: ', typeof anotherNumber);
//Numbers will come back up. There is more to know...
//Arrays
const anArray = [1, 2, 3, 4]; //an array of numbers, you can come back and add numbers to an Array
const aStringArray = ['Cheese', 'Bacon', 'Eggs']; //an array of strings
console.log('anArray: ', anArray);
console.log('aStringArray: ', aStringArray);
console.log('how many elements are in anArray? ', anArray.length);
//the '.' after the anArray(the variable) accesses the porperty "length" of the anArray
//
console.log("what is the type of anArray", typeof anArray);
console.log('what is the index 1 element ', anArray[1]);
//we are definitely not finished with Arrays. these are errrwhere
//Objects
const anObject = {
    color: 'red', //key:value => key is 'color' the value is 'red'
    size: 500, //keys are strings, but the quotes are implied
    toppings: ['pepperoni', 'cheese', 'jalapenos'],
    radius: 500
};

console.log('anObject: ', anObject);
console.log('type of anObject: ', typeof anObject);
console.log('what is the color of anObject ', anObject.color);
console.log('what is the size of anObject ', anObject.size);
console.log('what is the toppings on anObject ', anObject['toppings']);

//objects are ER'WHERE! we shall return.
//booleans
const yes = true;
const no = false;
// const yes = 3; //BAD!!! cannot use a reserved word for a variable
















