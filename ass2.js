//Upper Case 

var Name = "Moeed Qadri";
var uppercase = Name.toUpperCase();
console.log(uppercase);

//Lower Case 

var Name = "Moeed Qadri";
var lowercase = Name.toLowerCase();
console.log(lowercase);

//Title Case 

var Name:string = "Moeed Qadri";
var words:string[] = Name.split(" ");
var Titlecase:string="";
for(var i = 0;i<words.length;i++){
    Titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(Titlecase.trim());
