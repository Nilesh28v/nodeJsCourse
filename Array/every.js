var isEven = (element) => {
    return element % 2 === 0;
};

var result = [2,4,6,8].every(isEven);  //this is giving reuslt for whole array 

console.log(result);

var result = [2,4,5,8].every(isEven);  // if there is any array value which is non even then whole result become false

console.log(result);