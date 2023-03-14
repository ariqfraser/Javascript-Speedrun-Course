/*
*   Given an array of cars. Print (console.log) each car.
*/

const cars = ["tesla", "VW", "volvo", "Pope Mobile"];

// ⭐⭐⭐⭐⭐ Best Answer
for (const car of cars) {
    console.log(car);
}

// ⭐⭐⭐⭐
for (let i in cars) {
    console.log(car[i]);
}

// ⭐⭐⭐
cars.forEach(car => console.log(car));


// ⭐
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
console.log(car[3]);


/*
    The first loop using a for...of loop is generally considered better 
    than using forEach() for the following reasons:

        Performance:    The for...of loop is generally faster than the forEach() loop, 
                        especially when working with large arrays. This is because the for...of 
                        loop directly accesses the array elements, whereas the forEach() loop needs 
                        to call a callback function for each element.

        lexibility:     The for...of loop provides more flexibility than the forEach() loop. 
                        For example, you can use the break and continue statements to control 
                        the loop flow, and you can use destructuring to access multiple values 
                        from each element.

        Clarity:        The for...of loop is often considered more readable and concise than 
                        the forEach() loop, especially for simple operations like printing 
                        array elements to the console.

    That being said, there are also scenarios where the forEach() loop might be preferred 
    over the for...of loop. For example, when you need to apply a transformation or perform 
    an action on each array element and you want to create a new array or return a value. 
    In such cases, the map() method might be a better choice than either the for...of loop or the forEach() loop.
*/