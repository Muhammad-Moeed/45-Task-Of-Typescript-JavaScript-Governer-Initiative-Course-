// My Name Is Muhammad Moeed 
// Today Date : 14-Feb-2024
// Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

var Name = "\n   Moeed Qadri \t";

console.log("Name with whitespace:"+ Name);

var without_whitespace_Name = Name.trim();
console.log("Stripped name:"+without_whitespace_Name);

// My Name Is Muhammad Moeed 
// Today Date : 14-Feb-2024
// Find a quote from a famous person you admire.
// Print the quote and the name of its author.
// Your output should look something like the following
// ,including the quotation marks:

var famouse_quote = ("Albert Einstein once said"+","+"'"+"The world is a dangerous place to live."+"'");
console.log(famouse_quote);
