//reduce is used on arrrays to reduce the array to single element
//calculate the sum of all the elements in an array


const arr=[2,4,3,2];
arr.reduce(prev=0,curr,index,array)=>{
    console.log('prev:',prev);
    console.log('curr :',curr);
    sum=prev+curr+sum;
    return sum;
}