//More Conditional Tests:

// Tests for equality and inequality with strings
var Name = "Moeed";
console.log("Is city == 'New York'? I predict True.");
console.log(Name == 'Moeed');
console.log("Is city != 'Los Angeles'? I predict False.");
console.log(Name != 'Moeed');
// Tests using the lower case function
console.log("Is country.toLowerCase() == 'usa'? I predict True.");
console.log(Name.toLowerCase() == 'moeed');
console.log("Is country.toLowerCase() == 'usa'? I predict False.");
console.log(Name.toLowerCase() != 'moeed');
// Numerical tests
var x = 2;
var y = 2;
console.log("Is x == 2? I predict True.");
console.log(x == 2);
console.log("Is x != y? I predict False.");
console.log(x != y);
console.log("Is x > 1? I predict True.");
console.log(x > 1);
console.log("Is x < y? I predict False.");
console.log(x < y);
console.log("Is y >= 10? I predict True.");
console.log(y >= 2);
console.log("Is y <= 1? I predict False.");
console.log(y <= 1);
//Tests using "and" and "or" operators
console.log("Is y <= 1? I predict True.");
console.log(y <= 1 || x >= 2);
console.log("Is y <= 1? I predict False.");
console.log(y <= 1 && x >= 2);
//Test whether an item is in a array
var Names = ["Moeed", "Ammar", "Huzaifa"];
// Test whether an item is in the array
if (Names.indexOf("Ammar")) {
    console.log("We found iT");
}
