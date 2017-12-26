// alert("Welcome To My Page!");
// Hands On 2
/*var myFavoriteNumber = 8;
var myFavoritePet = "Toby";
var rainIsLovely = true;
var numberOne = 24;
var numberTwo = 57;
var addNumber = numberOne + numberTwo;
var dividNumbers = numberOne / numberTwo;*/

//  Hands On 3

// This part runs the calculateGrade function and shows the result
var inputGrade = prompt("Enter Grade");
var parsedInt = parseInt(inputGrade);
var finalGrade = calculateGrade(parsedInt);

function calculateGrade() {

}
if (inputGrade >= 90) {
   alert("A")
} else if (inputGrade >= 80) {
   alert("B")
}  else if (inputGrade >= 70) {
    alert("C")
} else if (inputGrade >= 60) {
    alert("D")
} else {
    alert("F");
}

