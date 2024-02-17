// var Guest = ["Ali","Ammar","Huzaifa",];
// var Invitationmsg = [": Please come to our party tonight, we will be grateful"];
// for (var i =0; i<Guest.length;i++){
//     for(var j =0; j<Invitationmsg.length;j++){
//         console.log(Guest[i] + Invitationmsg[j]);
//     }
// }
var Guest = ["Ali", "Ammar", "Huzaifa"];
var Invitationmsg = [": Please come to our party tonight, we will be grateful"];
var cant_make_it = ["Ammar"];
var update_Name = Guest.splice(1, 1, "Talha");
var new_guest = "Talha";
for (var i = 0; i < Guest.length; i++) {
    for (var j = 0; j < Invitationmsg.length; j++) {
        console.log(Guest[i] + Invitationmsg[j]);
    }
}
