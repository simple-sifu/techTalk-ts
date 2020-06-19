// Functions

console.log("\n\n*********************************************");
console.log(    "************* Hired *************************");
console.log("\n")

const codeSmithGenius: string[] = ["Cameron","Denis","Jeho","Garrett","Linda", "Fan", "Lia", "Rudo", "Ben", "Vessey"];
function hired(randomSeed?: number){

    randomSeed = randomSeed || 10;

    let max = randomSeed > codeSmithGenius.length ? codeSmithGenius.length : randomSeed;
    
    let randomIndex = Math.floor(Math.random() * Math.floor(max));

    return codeSmithGenius[randomIndex];

}

const codeSmithHired = hired();
console.log("Codesmith Genius who was hired -", codeSmithHired, '\n\n');

















// console.log("\n\n***************************************************************");
// console.log(    "****************** Interfaces    ******************************");
// console.log("\n")
interface person_Interface{
    firstName: string;
    lastName?: string;
}


// Interfaces
function company(codeSmithStudent: person_Interface){

    let niceCompanies: Array<string> = ["Google","Facebook","CapitalOne","American Express","UPS", "BOA", "Anything", "Someplace Nice"];

    let randomIndex = Math.floor(Math.random() * Math.floor(8));
    
    console.log(`${codeSmithStudent.firstName} ${codeSmithStudent.lastName} will end up working at ${niceCompanies[randomIndex]}\n\n`);
}

let codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
}

//  company(codeSmithStudent);



