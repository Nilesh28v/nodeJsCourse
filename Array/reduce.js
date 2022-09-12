//reduce is used on arrrays to reduce the array to single element
//calculate the sum of all the elements in an array


const arr=[2,4,3,2];
const arr2 = arr.reduce((prev,curr,index,array)=>{
    console.log('prev:',prev);
    console.log('curr :',curr);
    var sum=prev+curr+sum;
    return sum;
})