// Functions
function hired(num1, num2) {
    var codeSmithStudents = ["Cameron", "Denis", "Jeho", "Garrett", "Linda", "Tommy", "Horatio", "Lia", "Rudo", "Ben", "Vessey"];
    var num = num1 + num2;
    if (num > 10) {
        num = 10;
        var index = Math.floor(Math.random() * Math.floor(num));
        console.log(index);
        return codeSmithStudents[index];
    }
    else {
        return codeSmithStudents[num];
    }
}
var codeSmithHired = hired(5, 10);
console.log("Codesmith student who was hired -", codeSmithHired);
// optional
function optionalHired(num1, num2) {
    if (num2)
        return hired(num1, num2);
    else
        return hired(num1, 4);
}
var codeSmithOptionalHired = optionalHired(5);
console.log("Codesmith student who was hired using optionalHired -", codeSmithOptionalHired);
// default
function defaultHired(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return hired(num1, num2);
}
var codeSmithDefaultHired = defaultHired(5);
console.log("Codesmith student who was hired using defaultHired -", codeSmithDefaultHired);
// Interfaces
function company(person) {
    var codeSmithStudents = ["Google", "Facebook", "CapitalOne", "American Express", "UPS", "BOA", "Anything", "Someplace Nice"];
    var index = Math.floor(Math.random() * Math.floor(8));
    console.log(person.firstName + " " + person.lastName + " will end up working at " + codeSmithStudents[index]);
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
