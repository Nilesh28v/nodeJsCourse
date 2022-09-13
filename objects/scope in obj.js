// scope of var is functional
// scope of let and const are blockwise

function abc () {
    var a = 21;  // functional scope
    c = 23; // global scope

}
abc();


console.log(c);
// console.log(a);


// objects, accessing objs, copying, spread, rest, hosting, scopes
// spread is used for deep copying of data structures, for concatination, array to objects
// rest operator is used as function parameter to ctach the arguements as an array.
