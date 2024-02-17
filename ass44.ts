function createCar(manufacture, model_names, ...options) {
    var car = {
        manufacture: manufacture,
        model: model_names
    };

    for (let i = 0; i < options.length; i += 2) {
        car[options[i]] = options[i + 1];
    }

    return car;
}

let myCar = createCar("Germany", "BMW", "color", "black", "year", 2016);
console.log(myCar);
