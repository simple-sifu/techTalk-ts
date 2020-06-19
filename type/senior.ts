// Functions

console.log("\n\n*********************************************");
console.log(    "************* Hired *************************");
console.log("\n")

const codeSmithGenius: string[] = ["Cameron","Denis","Jeho","Garrett","Linda", "Tommy", "Horatiu", "Lia", "Rudo", "Ben", "Vessey"];
function hired(randomSeed: number){
    

    let max: number = 0;
    let randomIndex: number = 0;
    if (randomSeed){
        if (randomSeed > codeSmithGenius.length){
            max = codeSmithGenius.length;
        }else{
            max = randomSeed;
        }
        randomIndex = Math.floor(Math.random() * Math.floor(max));
        return codeSmithGenius[randomIndex];
    }else{
        max = codeSmithGenius.length;
        randomIndex = Math.floor(Math.random() * Math.floor(max));
        return codeSmithGenius[randomIndex];
    }
}

const codeSmithHired = hired(5);
console.log("Codesmith Genius who was hired -", codeSmithHired);


console.log("\n\n*********************************************************************");
console.log(    "**********    Hired using optional parameters    ********************");
console.log("\n")

// optional it means num2 is not required 
function hired_usingOptionalParmeter(randomSeed: number){
    if (randomSeed)
        return hired(randomSeed);
    else
        return hired(codeSmithGenius.length)
}

const codeSmithHired_withOptionalParmeter = hired_usingOptionalParmeter(5);
console.log("Codesmith student who was hired using optional parameter -", codeSmithHired_withOptionalParmeter);

console.log("\n\n*******************************************************************");
console.log(    "********** Hired using default parameters    **********************");
console.log("\n")

// default
function hired_usingDefaultParameter(randomSeed: number = 10){

    return hired(randomSeed);

}

const codeSmithHired_usingDefaultParameter = hired_usingDefaultParameter(5);
console.log("Codesmith student who was hired using default parameter -", codeSmithHired_usingDefaultParameter);


console.log("\n\n***************************************************************");
console.log(    "****************** Interfaces    ******************************");
console.log("\n")



// Interfaces
function company(person: {firstName: string, lastName: string}){
    let niceCompanies: Array<string> = ["Google","Facebook","CapitalOne","American Express","UPS", "BOA", "Anything", "Someplace Nice"];
    let randomIndex = Math.floor(Math.random() * Math.floor(8));
    
    console.log(`${person.firstName} ${person.lastName} will end up working at ${niceCompanies[randomIndex]}`);
}

let codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
}

company(codeSmithStudent);

console.log("\n\n******************************************************************");
console.log(    "*********** Interfaces with optional lastName   ******************");
console.log("\n")


interface CodeSmithStudent_Interface{
    firstName: string;
    lastName?: string;
}

let person = {
    firstName: 'Yevgeniy'
}

function company_withOptionalParameter(person: CodeSmithStudent_Interface){

    console.log(company({firstName: person.firstName, lastName: "Han"}));
}

company_withOptionalParameter(person);

console.log("\n\n");


