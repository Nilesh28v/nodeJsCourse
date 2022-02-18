//it will filter the elements of array based on the condition

const arr=[2,3,5,6];

const result=arr.filter((num,index,array)=> {
    return num<4;

})
console.log(result);