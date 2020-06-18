// Functions
var codeSmithGenius = ["Cameron", "Denis", "Jeho", "Garrett", "Linda", "Tommy", "Horatiu", "Lia", "Rudo", "Ben", "Vessey"];
function hired(randomSeed) {
    var max = 0;
    var randomIndex = 0;
    if (randomSeed) {
        if (randomSeed > codeSmithGenius.length) {
            max = codeSmithGenius.length;
        }
        else {
            max = randomSeed;
        }
        randomIndex = Math.floor(Math.random() * Math.floor(max));
        return codeSmithGenius[randomIndex];
    }
    else {
        max = codeSmithGenius.length;
        randomIndex = Math.floor(Math.random() * Math.floor(max));
        return codeSmithGenius[randomIndex];
    }
}
var codeSmithHired = hired(5);
console.log("Codesmith student who was hired -", codeSmithHired);
// optional it means num2 is not required 
function hired_usingOptionalParmeter(randomSeed) {
    if (randomSeed)
        return hired(randomSeed);
    else
        return hired(codeSmithGenius.length);
}
var codeSmithHired_withOptionalParmeter = hired_usingOptionalParmeter(5);
console.log("Codesmith student who was hired using optional parameter -", codeSmithHired_withOptionalParmeter);
// default
function hired_usingDefaultParameter(randomSeed, num2) {
    if (num2 === void 0) { num2 = 10; }
    return hired(randomSeed);
}
var codeSmithHired_usingDefaultParameter = hired_usingDefaultParameter(5);
console.log("Codesmith student who was hired using default parameter -", codeSmithHired_usingDefaultParameter);
// Interfaces
function company(person) {
    var niceCompanies = ["Google", "Facebook", "CapitalOne", "American Express", "UPS", "BOA", "Anything", "Someplace Nice"];
    var index = Math.floor(Math.random() * Math.floor(8));
    console.log(person.firstName + " " + person.lastName + " will end up working at " + niceCompanies[index]);
}
var codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
};
company(codeSmithStudent);
var person = {
    firstName: 'Yevgeniy',
    lastName: ''
};
function optionalCompany(person) {
    console.log(company({ firstName: person.firstName, lastName: "No Last Name provided" }));
}
optionalCompany(person);
