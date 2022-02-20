let str='I got offer worth 8 lakhs rupees per annum';
console.log(str.includes('worth'));
console.log(str.includes(8));
console.log(str.indexOf('w'));
str=str.replace('8','10');
console.log(str);


//Eg on sort

const Arr=['hi','atom','boy'];
console.log(Arr.sort());

const num=[1,232,43,2,11];
console.log(num.sort(function(a,b){
    return b-a;
}));