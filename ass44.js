//Cars:

function createCar(manufacture, model_names) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model_names
    };
    // for (let i = 0; i < options.length; i += 2) {
    //     car[options[i]] = options[i + 1];
    // }
    return car;
}
var myCar = createCar("Germany", "BMW", "color", "black", "year", 2016);
console.log(myCar);
