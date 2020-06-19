// Functions
console.log("\n\n*********************************************");
console.log("************* Hired *************************");
console.log("\n");
var codeSmithGenius = ["Cameron", "Denis", "Jeho", "Garrett", "Linda", "Fan", "Lia", "Rudo", "Ben", "Vessey"];
function hired(randomSeed) {
    randomSeed = randomSeed || 10;
    var max = randomSeed > codeSmithGenius.length ? codeSmithGenius.length : randomSeed;
    var randomIndex = Math.floor(Math.random() * Math.floor(max));
    return codeSmithGenius[randomIndex];
}
var codeSmithHired = hired(6);
console.log("Codesmith Genius who was hired -", codeSmithHired, '\n\n');
// Interfaces
function company(codeSmithStudent) {
    var niceCompanies = ["Google", "Facebook", "CapitalOne", "American Express", "UPS", "BOA", "Anything", "Someplace Nice"];
    var randomIndex = Math.floor(Math.random() * Math.floor(8));
    console.log(codeSmithStudent.firstName + " " + codeSmithStudent.lastName + " will end up working at " + niceCompanies[randomIndex] + "\n\n");
}
var codeSmithStudent = {
    firstName: 'Jeho',
    lastName: 'Cruz'
};
company(codeSmithStudent);
