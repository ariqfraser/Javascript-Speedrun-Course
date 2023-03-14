/*
?   -------------------------------------------
?                FUNCTIONS 101
?   -------------------------------------------

? What are functions?
    Functions are reusable blocks of code designed to perform a particular task

?   Why do we use functions?
        Functions allow us to save development time.
        Meaning we do not have write the same code everywhere (DRY Principle).

            D - Don't  
            R - Repeat
            Y - Yourself

        But don't stress youself about coding principles.
        You should be using functions because it saves you having to write code.
    
?   how do we use functions?
        Functions first have to be declared.
        Then can then be called using their name with () operator.
        e.g., someFunc();


*   Writing a basic function.
*/

function name() {
    // code goes here
}

function sayHello() {
    console.log('Hello there!');
}

sayHello();


/*
*   -------------------------------------------
*             Parameters / Arguements
*   -------------------------------------------

?   What is a parameter?
        Parameters, sometimes called arguements, are like temporary variables.
        They are used to contain data for the function.
        Parameters can have any name just like a variable.
        Function parameters are listed inside the parentheses () when the function definition.
        Function arguments are the values received by the function when it is invoked.
*/

function name(param1, param2) {
    // code goes here
}

function add(number1, number2) {
    const total = number1 + number2;
    console.log('The total amount is', total)
}

add(4, 5);

/*
*   -------------------------------------------
*               Function Return
*   -------------------------------------------
        When JavaScript reaches a return statement, the function will stop executing.

        If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

        Functions often compute a return value. The return value is "returned" back to the "caller":
*/

function calcArea(length, bredth) {
    return length * bredth;
    console.log(" I will not be ran :( ")
}

const field1 = calcArea(10, 30); // Here we are binding the return value of calcArea() to another variable.
const field2 = calcArea(15, 10);
const totalArea = field1 + field2;

console.log('Field 1 has an area of', field1);
console.log('Field 2 has an area of', field2);
console.log('Total area of both fields is', totalArea);

/*
!   -----------------------------------
!           RED PILL SECTION 💊
!   -----------------------------------

 *  Advanced Section *Read at your own risk*
        At this point you should be comfortable with the function of functions (pun intended).

?        What you have learnt about decraring a function is bad.

        The JavaScript ES6 update brought a new (better) way to define functions.
 */

// This is called an arrow function.
const myFunctionName = () => {
    // code goes here.
}

myFunctionName(); // Arrow functions are invoked the same way as normal functions.

/*
    Breaking it down you can see that the syntax of an arrow function looks an awful like declaring a variable.
*       VARIABLE = FUNCTION
*       VARIABLE = PARAMS => LOGIC

    Let's do some Algebra and break it down in pseudo code.

?       const variableName = () => {}
?       const variableName EQUALS () => {}
?       () => {} EQUALS *a function*

    What i'm trying to show with this, is that () => {} means to define a function.
    And all you are doing is binding it to a variable. Simple ain't it.
*/

    

//* Passing Parameters with Arrow Functions
const sum = (num1, num2) => {
    return num1 + num2;
}

console.log("Using an arrow function => ", sum(1, 3));



/*
*   You mighht be thinking:
!       Well, whats the point. It takes longer to write.
    
    There are actual differences between the two types of functions but thats an even more advanced topic.
    But now that you've come this far,
!           Arrow Functions are pretty neat with a concise syntax.
!           Don't be afraid to use them.
!           However, it's important to understand their limitations and use cases, 
!           as they are not a replacement for traditional functions in all situations.
!           When you learn more about JS you will understand.
*/

/*
?   -----------------------------------
?         Arrow Func Life Hacks
?   -----------------------------------

    Say you want to write a function that halves a number and returns the halved value.

    You would write it like so:

        const half = (n) => {
            return n/2;
        }

    or
        function half(n) {
            return n/2;
        }

    
    However, with arrow functions you can write it like this:
*/

const half = (n) => n/2;
const halfOfTen = half(10);
console.log(halfOfTen); // prints 5;

/*
?  So what's going on here?
   In the prior mentioned sum() function (See Line 124) we are directly stating that it will return the combination of num1 & num2.

   But here, by not using the {}, we are directly infering the return value of n/2.
*/
    