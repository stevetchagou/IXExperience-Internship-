var myArray = [];

var num1 = 0;
var num2 = 1;
var total = num1 + num2;

myArray.push(num1, num2, total);

fibonacci(num1, num2, total);



function fibonacci(num1, num2, total){
    while(myArray.length != 10) {
        num1 = total;
        total = num1 + num2;
        myArray.push(total);
        num2 = num1;
    }

    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i] + ' ');
    }
}

