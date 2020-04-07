var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(value) {
    return function sharePizza(divide) {
        return console.log("Each person get " + (value/divide) + " slices of pizza");
    }
}

console.log(sharePizza(3));