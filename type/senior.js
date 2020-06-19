// Functions
// console.log("\n\n*********************************************");
// console.log(    "************* Hired *************************");
// console.log("\n")
var codeSmithGenius = ["Cameron", "Denis", "Jeho", "Garrett", "Linda", "Fan", "Lia", "Rudo", "Ben", "Vessey"];
function hired(randomSeed) {
    var max = 0;
    var randomIndex = 0;
    if (randomSeed > codeSmithGenius.length) {
        max = codeSmithGenius.length;
    }
    else {
        max = randomSeed;
    }
    randomIndex = Math.floor(Math.random() * Math.floor(max));
    return codeSmithGenius[randomIndex];
}
// 
var codeSmithHired = hired(5);
// console.log("Codesmith Genius who was hired -", codeSmithHired);
// console.log("\n\n*********************************************************************");
// console.log(    "**********    Hired using optional parameters    ********************");
// console.log("\n")
// optional it means num2 is not required 
function hired_usingOptionalParmeter(randomSeed) {
    if (randomSeed)
        return hired(randomSeed);
    else
        return hired(codeSmithGenius.length);
}
var codeSmithHired_withOptionalParmeter = hired_usingOptionalParmeter(5);
// console.log("Codesmith student who was hired using optional parameter -", codeSmithHired_withOptionalParmeter);
// console.log("\n\n*******************************************************************");
// console.log(    "********** Hired using default parameters    **********************");
// console.log("\n")
// default
function hired_usingDefaultParameter(randomSeed) {
    if (randomSeed === void 0) { randomSeed = 10; }
    return hired(randomSeed);
}
var codeSmithHired_usingDefaultParameter = hired_usingDefaultParameter(5);
// console.log("Codesmith student who was hired using default parameter -", codeSmithHired_usingDefaultParameter);
// console.log("\n\n***************************************************************");
// console.log(    "****************** Interfaces    ******************************");
// console.log("\n")
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
var person = {
    firstName: 'Yevgeniy'
};
function company_withOptionalParameter(person) {
    console.log(company({ firstName: person.firstName, lastName: "Han" }));
}
// company_withOptionalParameter(person);
console.log("\n\n");
