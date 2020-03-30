var tomHeight = 9; //9in
var tomMass = 8; // 8 Ibs

var jerryHeight = 10; // 10cm
var jerryMass = 45; // 45g

var tomBmi = tomMass / (tomHeight * tomHeight);
var jerryBmi = jerryMass / (jerryHeight * jerryHeight);

var higherBmi = tomBmi > jerryBmi;


console.log("Is Tom's BMI higher than Jerry's?");
console.log(higherBmi);
