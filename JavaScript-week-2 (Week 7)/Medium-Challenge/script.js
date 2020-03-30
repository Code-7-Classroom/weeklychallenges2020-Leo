var input = parseInt(prompt('Please enter a number 1-12'));


var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];

if (input < 1 || input > 12)  {
    alert('Not a valid number');
} else {
    console.log(month[input - 1]);
}