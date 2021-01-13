
//implementing function to call add element function by pressing enter

var input = document.getElementById("text1");

input.addEventListener("keyup", function(event) {
  if (event.keycode == 13 || event.which == 13) {
    add_element_to_array();
  }
});


//making the input array

var x = 0;
var inputArr = Array();

function add_element_to_array()
{
 inputArr[x] = parseInt(document.getElementById("text1").value); 
 x++;
 document.getElementById("text1").value = "";
 display_array();
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<inputArr.length; y++)
   {
     e += "Element " + y + " = " + inputArr[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}




function analysis(){
//let inputArr = [10, 1, 9, 2, 8, 3, 7, 4, 6];

console.log("The input is \n");

console.log(inputArr + "\n");

//var res = <hr/>;


//UP
const inputASorted = inputArr.sort(function(a, b){return a-b});

console.log("The UP will be \n")

console.log(inputASorted + "\n");


//DOWN
const inputDSorted = inputArr.sort(function(a, b){return b-a});

console.log("The Down will be \n")

console.log(inputDSorted + "\n");


//max
console.log("The max will be \n")

console.log(Math.max(...inputArr) + "\n");


//min
console.log("The min will be \n")

console.log(Math.min(...inputArr) + "\n");


//sum
var sum = inputArr.reduce(function(a, b){
    return a + b;
}, 0);

console.log("The sum will be \n")

console.log(sum + "\n");


//median *after UP
let len = inputArr.length;
const mid = Math.ceil(len / 2);

const median =
  len % 2 == 0 ? (inputASorted[mid] + inputASorted[mid - 1]) / 2 : inputASorted[mid - 1];

console.log("The Median will be \n")

console.log(median + "\n");

//mean *after sum

console.log("The mean will be \n");

sum *= 1.00;

console.log(Number.parseFloat(sum/inputArr.length).toFixed(3) + "\n");

//standard deviation

function standardDeviation(values){
    var avg = average(values);
    
    var squareDiffs = values.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    var avgSquareDiff = average(squareDiffs);
  
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  
  function average(data){
    var sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  }

  let stddev = standardDeviation(inputArr);

console.log("The Standard Deviation will be \n")

console.log(Number.parseFloat(stddev).toFixed(3) + "\n");


}






//end


