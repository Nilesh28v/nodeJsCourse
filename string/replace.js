const a="Hey this is Nilesh and this Nilesh";
let b=a.replace('Nilesh','nilesh vishwakarma');
console.log(b)  // by the replace we cant not change in the main string but we can change that string and save to another variable

//but it is replacing only first occurence not all

b=a.replace(/this/g,'that')  //by this way we can replace in all occurance
console.log(b);