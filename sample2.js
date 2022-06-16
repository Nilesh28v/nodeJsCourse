function getOccurance(array,value){
  return array.filter((v)=>(v===value)).length;
}
console.log(getOccurance([2,3,4,5,9,4],4));