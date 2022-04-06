const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const mul = (a,b) => {
    return a*b;
}

exports.add = add;  //or   module.exports.add=add;
exports.sub = sub;  //or   module.exports.sub=sub;
exports.mul = mul;  //or   module.exports.mul=mul;

 

//meaning of above is

//{add: function}
//{add: function, sub:function}
//{add:funcitnn, sub:fucntion, mul: function}