//More Guests:

var Guest = ["Ali","Ammar","Huzaifa"];
// var New_Guest = ["Ahmed","Bilal","Moeed"];
Guest.unshift("Ahmed");// Add "Ahmed" to the beginning of the Guest array
Guest.splice(2, 0, "Bilal");// Add "Bilal" after "Ahmed"
Guest.push("Moeed");// Add "Moeed" to the end of the Guest array

var Invitationmsg = [": We have seats left for dinner! Please come to our party "];

 for (var i =0; i<Guest.length;i++){
     for(var j =0; j<Invitationmsg.length;j++){
         console.log(Guest[i] + Invitationmsg[j]);
     }
 }
