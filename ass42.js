var magician_names = ["Huzaifa", "Aman", "Zaafr"];
var new_magicians = [];
function makes_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        console.log("The Great " + magician_names[i]);
    }
    return new_magicians;
}
var new_magicians = makes_great(magician_names.slice());
makes_great(magician_names);
makes_great(new_magicians);
