// TypeScript Basic Types
// boolean
var isCodesmithStudent = true;
// number
var numCohort18 = 23;
// string
var coolHairCut = "Phil";
// string
var sentence = "My name is " + coolHairCut + "\n I am a teacher and have the coolest HairCut at CodeSmith !!!";
//  console.log(sentence);
// Arrays
var codeSmithStudents = ["Cameron", "Denis", "Linda"];
var codeSmith19 = ["Jeho", "Garrett", "Cynthia"];
//Tuples
var techInterview = ['How many people passed the tech interview ?', 22, "How many tries? ", 10];
// Enums
var AlgoLevel;
(function (AlgoLevel) {
    AlgoLevel[AlgoLevel["Egon"] = 0] = "Egon";
    AlgoLevel[AlgoLevel["High"] = 1] = "High";
    AlgoLevel[AlgoLevel["Medium"] = 2] = "Medium";
    AlgoLevel[AlgoLevel["Low"] = 3] = "Low";
})(AlgoLevel || (AlgoLevel = {}));
;
var lovesAlgo = AlgoLevel.Egon;
//  console.log("lovesAlgo -", lovesAlgo);
// Any
var randomValue = "NOOOOOOOOOOOOOOOOOO please dont do this !!!!  What would be the point of using TypeScript ????";
randomValue = true;
randomValue = "Cohort 19 is the best !";
// var isTigerKingCool = true;
// //number
// var cohort18 = 23;
// var cohort19 = 33;
// var bestCohortsEver = cohort18 + cohort19;
// // console.log('best cohorts ever:', bestCohortsEver);
// var hex = 0xf00d;
// var binary = 10;
// var octal = 484;
// //String
// var hair = 'bald';
// //Array
// var productionProject = ['lots', 'of', 'things', 'can', 'go', 'wrong'];
// var learningExperience = ['but', 'you', 'learn', 'a', 'lot'];
// //Tuple => A combination of data types
// var basket;
// basket = ['basketball', 3, 'point shot'];
// // You modify what's in the array unlike Python for tuple
// // basket[0] = "soccer";
// //Any you could assign whichever data type you want 
// var anyDataType = 'aaaaghhhhhh noooooo!';
// anyDataType = 6;
// anyDataType = [1, 2, 3];
// // //null and undefined
// var meh = undefined;
// var moo = null;
// // Enum
// var cohortNum18;
// (function (cohortNum18) {
//     cohortNum18[cohortNum18["Rudo"] = 0] = "Rudo";
//     cohortNum18[cohortNum18["Fan"] = 1] = "Fan";
//     cohortNum18[cohortNum18["Harry"] = 2] = "Harry";
//     cohortNum18[cohortNum18["Linda"] = 3] = "Linda";
//     cohortNum18[cohortNum18["Allison"] = 4] = "Allison";
//     cohortNum18[cohortNum18["Denis"] = 5] = "Denis";
// })(cohortNum18 || (cohortNum18 = {}));
// var student = cohortNum18.Linda;
// console.log("This student is number...", student);
