// Functions
function hired(num1: number, num2: number){

    let codeSmithStudents: string[] = ["Cameron","Denis","Jeho","Garrett","Linda", "Tommy", "Horatio", "Lia", "Rudo", "Ben", "Vessey"];
    let num = num1 + num2;
    if (num > 10){
        num = 10
        let index = Math.floor(Math.random() * Math.floor(num));
        console.log(index);
        return codeSmithStudents[index];
    }else{
        return codeSmithStudents[num];
    }
}

const codeSmithHired = hired(5,10);
console.log("Codesmith student who was hired -", codeSmithHired);


// optional
function optionalHired(num1: number, num2?: number){
    if (num2)
        return hired(num1, num2);
    else
        return hired(num1, 4)
}

const codeSmithOptionalHired = optionalHired(5);
console.log("Codesmith student who was hired using optionalHired -", codeSmithOptionalHired);



// default
function defaultHired(num1: number, num2: number = 10){

    return hired(num1, num2);

}

const codeSmithDefaultHired = defaultHired(5);
console.log("Codesmith student who was hired using defaultHired -", codeSmithDefaultHired);





// Interfaces
function company(person: {firstName: string, lastName: string}){
    let codeSmithStudents: Array<string> = ["Google","Facebook","CapitalOne","American Express","UPS", "BOA", "Anything", "Someplace Nice"];
    let index = Math.floor(Math.random() * Math.floor(8));
    
    console.log(`${person.firstName} ${person.lastName} will end up working at ${codeSmithStudents[index]}`);
}

let codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
}

company(codeSmithStudent);

interface CodeSmithStudent{
    firstName: string;
    lastName?: string;
}

let person = {
    firstName: 'Yevgeniy',
    lastName: ''

}

function optionalCompany(person: CodeSmithStudent){

    console.log(company({firstName: person.firstName, lastName: "No Last Name provided"}));
}

optionalCompany(person);




