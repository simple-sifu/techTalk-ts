// TypeScript Basic Types
//boolean
var isTigerKingCool = true;
//number
var cohort18 = 23;
var cohort19 = 33;
var bestCohortsEver = cohort18 + cohort19;
// console.log('best cohorts ever:', bestCohortsEver);
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var hair = 'bald';
//Array
var productionProject = ['lots', 'of', 'things', 'can', 'go', 'wrong'];
var learningExperience = ['but', 'you', 'learn', 'a', 'lot'];
//Tuple => A combination of data types
var basket;
basket = ['basketball', 3, 'point shot'];
// You modify what's in the array unlike Python for tuple
// basket[0] = "soccer";
//Any you could assign whichever data type you want 
var anyDataType = 'aaaaghhhhhh noooooo!';
anyDataType = 6;
anyDataType = [1, 2, 3];
// //null and undefined
var meh = undefined;
var moo = null;
// Enum
var cohortNum18;
(function (cohortNum18) {
    cohortNum18[cohortNum18["Rudo"] = 0] = "Rudo";
    cohortNum18[cohortNum18["Fan"] = 1] = "Fan";
    cohortNum18[cohortNum18["Harry"] = 2] = "Harry";
    cohortNum18[cohortNum18["Linda"] = 3] = "Linda";
    cohortNum18[cohortNum18["Allison"] = 4] = "Allison";
    cohortNum18[cohortNum18["Denis"] = 5] = "Denis";
})(cohortNum18 || (cohortNum18 = {}));
var student = cohortNum18.Linda;
console.log("This student is number...", student);
