//Shrinking Guest List:

var New_Guest = ["Ahmed", "Ali", "Bilal", "Ammar", "Huuzaifa", "Moeed",];
// console.log("Invite only two people for dinner.");
var msg = ["Please come to our Dinner."];
var not_comming_1 = New_Guest.pop();
console.log("Sorry! " + not_comming_1 + ", I can't invite you to dinner.");
var not_comming_2 = New_Guest.pop();
console.log("Sorry! " + not_comming_2 + ", I can't invite you to dinner.");
var not_comming_3 = New_Guest.pop();
console.log("Sorry! " + not_comming_3 + ", I can't invite you to dinner.");
var not_comming_4 = New_Guest.pop();
console.log("Sorry! " + not_comming_4 + ", I can't invite you to dinner.");
for (var i = 0; i < New_Guest.length; i++) {
    for (var j = 0; j < msg.length; j++) {
        console.log(New_Guest[i] + " " + msg[j]);
    }
}
