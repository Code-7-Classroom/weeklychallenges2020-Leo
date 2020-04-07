var run = exercise('running');
var swim = exercise("swimming");

function exercise(value) {
    return function() {
        return "Today exercise: " + value;
    };

}

run();
swim();