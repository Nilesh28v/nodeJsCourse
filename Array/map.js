//map,reduce,filter

const arr=[2,3,4,5,6];
//map allows to transform your array, basically
//you can perform on each element of array

const resultArr=arr.map((num,index,array) =>{     //(num)   we can use this much also 

    return num*num;
});
console.log(resultArr); 