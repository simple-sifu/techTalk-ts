// TypeScript Basic Types

// boolean
let isCodesmithStudent: boolean = true;

// number
let numCohort18: number = 23;

// string
let coolHairCut: string = "Phil";

// string
let sentence: string = `\n\nMy name is ${coolHairCut}, I am a teacher and have the coolest HairCut at CodeSmith !!!\n\n`;
 console.log(sentence);

 // Arrays
 let codeSmithStudents: string[] = ["Cameron","Denis","Linda"];
 let codeSmith19: Array<string> = ["Jeho","Garrett","Cynthia"];

 //Tuples
 let techInterview: [string, number, string, number] = ['How many people passed the tech interview ?', 22, "How many tries? ", 10];


 // Enums
 enum AlgoLevel {Egon, High, Medium, Low};
 let lovesAlgo: AlgoLevel = AlgoLevel.Egon;
//  console.log("\n\nlovesAlgo -", lovesAlgo + "\n\n");


 // Any
 let randomValue: any = "NOOOOOOOOOOOOOOOOOO please dont do this !!!!  What would be the point of using TypeScript ????";
 randomValue = true;
 randomValue = "Cohort 19 is the best !";

