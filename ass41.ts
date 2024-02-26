//Great Magicians:

var magician_names = ["Huzaifa", "Aman", "Zaafr"];

    function show_magicians(magician_names) {
        magician_names.forEach(function(name) {
            console.log(name);
        });
    }

    function make_great(magician_names) {
        for (var i = 0; i < magician_names.length; i++) {
            console.log("The Great " + magician_names[i]);
        }
    }

    show_magicians(magician_names);
    make_great(magician_names);
