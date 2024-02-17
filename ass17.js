var places = ["Madinah", "Baghdad", "Ajmer", "Najaf", "Karbala"];
// Print original order
console.log("Original order:");
console.log(places);
// Print alphabetical order without modifying original list
console.log("Alphabetical order:");
console.log(places.sort());
// Print original order again
console.log("\nStill in original order:");
console.log(places);
// Print reverse alphabetical order without modifying original list
console.log("\nReverse alphabetical order:");
console.log(places.sort().reverse());
// Print original order again
console.log("\nStill in original order:");
console.log(places);
// Reverse the order of the list
places.reverse();
console.log("\nReversed order:");
console.log(places);
// Reverse the order of the list again to get back to original order
places.reverse();
console.log("\nBack to original order:");
console.log(places);
// Sort the array in alphabetical order
console.log("\nSorted in alphabetical order:");
console.log(places.sort());
// Sort the array in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log(places.sort().reverse());
