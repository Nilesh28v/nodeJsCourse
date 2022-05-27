var testArray =[2,3,2,5,6,4,8];

console.log(testArray.fill('h',2,5)); //here 5 is exclusive means it will take 2 to 4 


const myNumber =[23,4,4,3,45,465,34];

const result = myNumber.filter((num) => num !=45);   //in filter callback is needed so we given

console.log(result);