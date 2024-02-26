//Ordinal Numbers:

var ordinal_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Loop through the array
for (var i = 0; i < ordinal_numbers.length; i++) {
    var number = ordinal_numbers[i];
    var ordinal;
    // Determine the ordinal ending based on the number
    if (number === "1") {
        ordinal = "st";
        console.log(number + ordinal);
    }
    else if (number === "2") {
        ordinal = "nd";
        console.log(number + ordinal);
    }
    else if (number === "3") {
        ordinal = "rd";
        console.log(number + ordinal);
    }
    else {
        ordinal = "th";
        console.log(number + ordinal);
    }
    // Print the number with its ordinal ending
    // console.log(number + ordinal);
}
