/*
* ---------------------------
*       DATA TYPES 101
* ---------------------------

    To understand how to use variable you must first understand the basic data types of JS.
    These are the most common primative data types you will use.
*/

//?   Numbers
//        These are numbers, duh. 
16;
7.5;


//?   Strings
//      These are used for text data and are defined with "" or ''.
"Yellow";
'Johnson';


//?   Booleans
//     True or False values
true;
false;


//?   Null
//      Null values are empty values.
null;


/*
* ---------------------------
*          VARIABLES
* ---------------------------

Variables are used to store data. Containers for data, if you will.
Variables must be declared before they are used.
There are two ways of declaring a variabel.

const:
    - short for constant
    - cannot be Redeclared
    - cannot be Reassigned ("immutable")
    - simply put const variables are constant - they cannot be changed*
    e.g., 
        const appleCount = 12;
        appleCount = 8; <--- would return an error.

let:
    - cannot be Redeclared
    - CAN be Reassigned ("mutable")
    e.g., 
        let appleCount = 12;
        appleCount = 7; <--- appleCount's value would change to 7;

! You should always use const unless you need to mutate a variable. (Example below)    
*/

const driver = "Ariq";
let passenger = "some dude";

console.log('In this car the driver is ' + driver + ' and the passenger is ' + passenger);

passenger = "13aldy";
console.log('In this car the driver is ' + driver + ' and the passenger is ' + passenger);


/*
!   -----------------------------------
!           RED PILL SECTION 💊
!   -----------------------------------
?     OBJECTS (do functions101 first)
?   -----------------------------------

    Objects in JS are some of the most used and useful things.
    Objects in JS are just like objects in real life.
    They have properties and methods.
    Objects are variables too. They just allow you to contain multiple values.

    For example a toilet is an object.

    It would have certain properties like:
        colour,
        diameter

    It would also have certain methods like
        being able to flush.

    
    In JS the toilet object would look like this:

        {
            colour: "white",
            diameter: "50cm",
            flush: function () {}
        }

    This is called an object literal and is easily spotted with the {}. (yes, technically functions are objects too)

?    A method is just a function defined on an object. Nuf said.
*/

const car = {
    make: "Vauxhall",
    model: "Corsa",
    registration: "PS29 JXL"
}

/*
    The above is a real world example of an object in JS.
    As you can see we have bound it to a variable.
    It is common to do this with a const.

?   Object properties are written as key:value pairs (key and value separated by a colon).

    To access the data is as follows:
        objectName.propertyName;

        or

        objectName["propertyName"]


    e.g.,
*/

console.log(car.make);
console.log(car["model"]);

/*
    You can change an object's value by assigning a new value to the property.
*/

car.registration = "800B5";
console.log(car.registration);


/*
?   -----------------------------
?          Array Objects
?   -----------------------------

    Array Objects, arrays for short, are another data type.
    Arrays, like objects, allow you to store multiple values in one variable.

    They the easiest way to define an array is with the square bracket []

    e.g.,
        const variableName = [item1, item2, item3];

*/

const fruit1 = "Apple";
const fruit2 = "Orange";
const fruit3 = "Lemon";

const fruits = ["Apple", "Orange", "Lemon"];

/*
    The position in of the item in the array is called the index:
    
               0      1      2
            [item1, item2, item3]
    
    Note: Arrays start at index 0.

    To access data within the array, you reference it's index.
*/

console.log(fruits[1]); // logs "Oranges"
console.log(fruits); // You can also access the whole array with just it's name.

/*
    By default arrays have some useful properties and methods.

    Some examples:
*/

console.log(fruits.length); // the length property is the number of items the array has.
fruits.push("Peach"); // Appends a new value to the array.
console.log(fruits.sort()); // sort() will return a sorted an array.

    

/*
!   All Arrays are Objects, but not all Objects are Arrays.
    Think of objects like the bare bones "complex" data type.
    Arrays are like a modified template of that data type with prebuilt methods.

    Under the hood arrays are objects but the keys are numbers.
        {
            0: "Apple",
            1: "Orange",
            2: "Lemon",
            methodName: () => {this is an example}
        }

    This means we can do gnarly stuff like:
*/

fruits["cringe"] = "poo"; // That said I don't think i've ever applied a string index to an array.
console.log(fruits["cringe"]);

/*
?   So why use arrays?
    Good question. Arrays are iterable, meaning we can loop over them.

    Like  so,
*/

for (const value of fruits) {
    // Don't worry about for loops yet,
    // just know that this is looping through 
    // each item and logging the value.
    console.log(value);
}

