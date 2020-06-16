/*
The file is treated as a script rather than a module.
Module has its own scope while scripts share their scope globally.
You have to export an empty object which export nothings. 
Adding an import/export statement , TS treats this as a module
*/
 export {}
 let message = 'Hello World';
 console.log(message);


 let firstName: string = "12";
//  console.log(firstName);
 let salary: number = 1000;
 
 let nullVal: null; // Possibly taken out, we don't need it now
 let undefinedVal: undefined = undefined;  // Possibly unecessary as well

 let isOld: boolean = false;
 let isNew: boolean = true;


 // To declare arrays we have 3 ways:
 let list1: number[] = [80085, 420, 69]

 // We can specifiy the variables of numbers
 let list2: Array<number> = [1,2,3];

 // We can have a combination of the 2:
 let person2: [string, number] = ["Tommy", 24];

// TO add more

// Enums

// Interfaces

/// ============================================================================================================

function add(num1: number, num2: number) : number {
    return num1 + num2;
}

console.log(add(5,10));



function addDefault(num1: number, num2: number = 10) : number {
    return num1 + num2;
}

console.log(addDefault(5));
