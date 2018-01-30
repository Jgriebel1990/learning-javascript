//comparisons
// things that we compare must be comparabel 
// comparable means that i can use the following operators:
//      <, <=, >, >=, ===, !== 
// (full disclosure, there are more..., but sometimes they cause problems at the beginning)

const aString = 'abc';
const anotherString = 'abcd';
const aNumber = 123;
const anotheNumber = 123.2;
console.log('aString === anotherString: ', aString === anotherString);
console.log('aString < anotherString: ', aString < anotherString);
console.log('aString <= anotherString: ', aString <= anotherString);
console.log('aString > anotherString: ', aString > anotherString);
console.log('aString >= anotherString: ', aString >= anotherString);
console.log('aString !== anotherString: ', aString !== anotherString);
console.log('aNumber === anotherNumber: ', aNumber === anotheNumber);
console.log('aNumber < anotherNumber: ', aNumber < anotheNumber);
console.log('aNumber <= anotherNumber: ', aNumber <= anotheNumber);
console.log('aNumber > anotherNumber: ', aNumber > anotheNumber);
console.log('aNumber >= anotherNumber: ', aNumber >= anotheNumber);
console.log('aNumber !== anotherNumber: ', aNumber !== anotheNumber);

//conditional statements
// if -> using to run code based on the answer to a question.
// if-else -> use it to run code based on the answer to a question, 
        //but there is a fallball plane (the else)

// if-elseif-else -> i have multiple questions that determine what code to run.
//Note: There is another way called a 'switch' but it works a little differently.

//if
if(3 === 3){
    console.log('Orange crush is delicious!');
}

if('a' === 'b'){
    console.log('this will never print');
}

//if-else
if('grape' === 'banana'){
    console.log('this is never going to run');
} else {
    console.log('this is a backup plan');
}

//if-elseif-else
// const someNumber =100; //A
const someNumber = 'wewgfsgergewgwerg'; //B
if(someNumber === 100){ //A
    console.log('it is 100');
} else if(someNumber === 42){ //B
    console.log('the meaning of life');
} else { //C
    console.log('none of the others worked');
}


//more complex questions
//is that more than 3 and less than 10
//or is that more than 10 or less than 100
//boolean operators: ! -> not
//                   && -> and
//                   || -> or
const name = 'Jefferson';
if( name === 'Jefferson' || name === 'Magnus'){
    console.log('The name is equal to Magnus or Jefferson');
}
if( name === 'Jefferson' && name === 'Magnus'){
    console.log('this will never run becasue the name would be magnus and jefferson');
}
if( !( 3 <= 3) ){
    console.log('this will never run because the ! flips the true statement to false');
}