// TypeScript Basic Types
// boolean
var isCodesmithStudent = true;
// number
var numCohort18 = 23;
// string
var coolHairCut = "Phil";
// string
var sentence = "My name is " + coolHairCut + ", I am a teacher and have the coolest HairCut at CodeSmith !!!";
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
console.log("lovesAlgo -", lovesAlgo);
// Any
var randomValue = "NOOOOOOOOOOOOOOOOOO please dont do this !!!!  What would be the point of using TypeScript ????";
randomValue = true;
randomValue = "Cohort 19 is the best !";
