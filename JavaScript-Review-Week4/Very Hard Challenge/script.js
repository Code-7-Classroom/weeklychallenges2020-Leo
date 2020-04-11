// function total()


// function isEven(value) {
// 	if (value%2 == 0)
// 		return true;
// 	else
// 		return false;
// }

// var input = prompt("Please enter double digit amount of money: ");

// function factorial(n) {
//     // 0! = 1, 1! = 1
//     if (n > 0 && n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

function veryHard(coinsArray, target) {
        coinsArray.sort((a,b) => a - b).reverse();
        var count = 0;
        var coinsAdded = [];
        for (var i = 0; i < coinsArray.length; i++){
            while (target >= coinsArray[i]){
                target -= coinsArray[i];
                count++;
                coinsAdded.push(coinsArray[i]);
            }
        }

        if (target != 0) {
            return -1
        }

        console.log(coinsAdded);
        return count;
    }

    

    var input = parseInt(prompt("Enter a number you would like change for: "));


    console.log(veryHard([1, 5, 10, 25], input));
