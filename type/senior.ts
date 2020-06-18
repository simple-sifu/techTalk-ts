// Functions

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
console.log("Codesmith student who was hired -", codeSmithHired);


// optional it means num2 is not required 
function hired_usingOptionalParmeter(randomSeed?: number){
    if (randomSeed)
        return hired(randomSeed);
    else
        return hired(codeSmithGenius.length)
}

const codeSmithHired_withOptionalParmeter = hired_usingOptionalParmeter(5);
console.log("Codesmith student who was hired using optional parameter -", codeSmithHired_withOptionalParmeter);



// default
function hired_usingDefaultParameter(randomSeed: number, num2: number = 10){

    return hired(randomSeed);

}

const codeSmithHired_usingDefaultParameter = hired_usingDefaultParameter(5);
console.log("Codesmith student who was hired using default parameter -", codeSmithHired_usingDefaultParameter);


// Interfaces
function company(person: {firstName: string, lastName: string}){
    let niceCompanies: Array<string> = ["Google","Facebook","CapitalOne","American Express","UPS", "BOA", "Anything", "Someplace Nice"];
    let index = Math.floor(Math.random() * Math.floor(8));
    
    console.log(`${person.firstName} ${person.lastName} will end up working at ${niceCompanies[index]}`);
}

let codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
}

company(codeSmithStudent);

interface CodeSmithStudent_Interface{
    firstName: string;
    lastName?: string;
}

let person = {
    firstName: 'Yevgeniy',
    lastName: ''

}

function company_withOptionalParameter(person: CodeSmithStudent_Interface){

    console.log(company({firstName: person.firstName, lastName: "No Last Name provided"}));
}

company_withOptionalParameter(person);




