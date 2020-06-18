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
console.log("Codesmith Genius who was hired -", codeSmithHired);
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
function hired_usingDefaultParameter(randomSeed) {
    if (randomSeed === void 0) { randomSeed = 10; }
    return hired(randomSeed);
}
var codeSmithHired_usingDefaultParameter = hired_usingDefaultParameter(5);
console.log("Codesmith student who was hired using default parameter -", codeSmithHired_usingDefaultParameter);
// Interfaces
function company(person) {
    var niceCompanies = ["Google", "Facebook", "CapitalOne", "American Express", "UPS", "BOA", "Anything", "Someplace Nice"];
    var randomIndex = Math.floor(Math.random() * Math.floor(8));
    console.log(person.firstName + " " + person.lastName + " will end up working at " + niceCompanies[randomIndex]);
}
var codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
};
company(codeSmithStudent);
var person = {
    firstName: 'Yevgeniy'
};
function company_withOptionalParameter(person) {
    console.log(company({ firstName: person.firstName, lastName: "Han" }));
}
company_withOptionalParameter(person);
