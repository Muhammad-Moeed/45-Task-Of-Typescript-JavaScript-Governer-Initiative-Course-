// var current_users = ["Admin", "Moeed", "shahzaib", "Taha", "Talha"];
// var new_users = ["Admin", "Moeed", "Ammar", "Ahmed", "Talha"];
// for (var i = 0; i < new_users.length; i++) {
//     var usernameExists = false;
//     for (var j = 0; j < current_users.length; j++) {
//         if (current_users[j].toLowerCase() === new_users[i].toLowerCase()) {
//             console.log("The person will need to enter a new username");
//             usernameExists = true;
//             break;
//         }
//     }
//     if (!usernameExists) {
//         console.log("The username " + new_users[i]+ " is available.");
//     }
// }
var current_users = ["Admin", "Moeed", "shahzaib", "Taha", "Talha"];
var new_users = ["Admin", "Moeed", "Ammar", "Ahmed", "Talha"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("The person will need to enter a new username");
    }
    else {
        console.log("The username " + new_users[i] + " is available.");
    }
}
