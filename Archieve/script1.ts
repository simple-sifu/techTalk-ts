// TypeScript Basic Types
//boolean
let isTigerKingCool: boolean = true; 

//number
const cohort18: number = 23 
const cohort19: number = 33;

const bestCohortsEver: number = cohort18 + cohort19
// console.log('best cohorts ever:', bestCohortsEver);

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744

//String
let hair: string = 'bald';

//Array
let productionProject: string[] = ['lots', 'of', 'things', 'can', 'go', 'wrong'];
let learningExperience: Array<string> = ['but', 'you', 'learn', 'a', 'lot'];

//Tuple => A combination of data types
let basket: [string, number, string];
basket = ['basketball', 3, 'point shot'];

// You modify what's in the array unlike Python for tuple
// basket[0] = "soccer";


//Any you could assign whichever data type you want 
let anyDataType: any = 'aaaaghhhhhh noooooo!';
anyDataType = 6;
anyDataType = [1,2,3];

// //null and undefined
let meh: undefined = undefined;
let moo: null = null;



// Enum
enum cohortNum18 { Rudo, Fan , Harry, Linda, Allison, Denis}
let student: cohortNum18 = cohortNum18.Linda
console.log("This student is number...",student)




