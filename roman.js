
document.getElementById("submit").onclick = convertToRoman;

function convertToRoman() {
  var num       = document.getElementById("input").value;	
  console.log(num);
  var decimal   = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman     = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var remainder = ''
  var romanOut  = ''
  var conv      = ''
  var arrayOut  = new Array;
  
  for (var i = 0; i < decimal.length; i++) {
    while (num >= decimal[i]) {
      remainder      = num - decimal[i];
	  num            = remainder;
      arrayOut.push(roman[i]);
	  } 
	}
    romanOut       = arrayOut.join('');
	console.log(romanOut);
	document.getElementById("output").innerHTML = romanOut;
}
