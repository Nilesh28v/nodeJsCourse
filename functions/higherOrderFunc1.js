function multiplyBy(number){             //higher order or first class function
    return function multiply(number2){
        return number * number2;
    }
}

const multiplyBy2 = multiplyBy(2);    //multiplyBy2  becomes partial function
                                     //multiplyBy2 have is holding 'multiply' function
console.log(multiplyBy2(3));
console.log(multiplyBy2(4));
console.log(multiplyBy2(5));


const multiplyBy5= multiplyBy(5);
console.log(multiplyBy5(3));
console.log(multiplyBy5(4));
console.log(multiplyBy5(5));
