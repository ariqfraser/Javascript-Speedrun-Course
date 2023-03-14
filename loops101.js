/*
?   -------------------------------------------
?                LOOPS 101
?   -------------------------------------------

?       The loops you should care about
    There are 3 different types of "for" loops.
        - for
        - for/of
        - for/in
    
    I never use while loops and do/while loops. 
    They're literally dog water. 
    Learn them if you really want.
?    ------------------------------------------
*/

/*
    A "normal" for loop takes in 3 expressions.

    for (expression 1, expression2, expression 3) {

    }

    Expression 1 is executed (one time) before the execution of the code block.
    Expression 2 defines the condition for executing the code block.
    Expression 3 is executed (every time) after the code block has been executed.

    FYI: i++ is the same as i = i + 1
*/
for (let i = 0; i < 10; i++) {
    // code block
}


/*
    A for/of loops through the values of an iterable object (an array),
    binding the value to a variable of each iteration.
*/

const someArray = ["value 1", "value 2"];

for (const value of someArray) {
    console.log(value);
}

/*
    A for/in loops through the propterties of an object. 
*/

for (const index in someArray) {
    console.log(index);
}

const person = {
    name: 'Bob',
    sex: 'Male',
    age: 78,
    hobbies: ['Tennins', "Tetris"]
}

for (const key in person) {
    console.log(key);
}