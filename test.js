// function calcAddition(marks=100,studentsMark) 
// { 
//     if(studentsMark<90){
//         console.log('Hey you need study more');
//     }
//     else{
//             console.log('chill');
//     } 
// return 'ok bye'; 
//     }
// console.log(calcAddition(100,55));
function abc(marks = 55){

if (marks < 28) {
    console.log('Failed');
} else if (marks > 28 && marks < 50){
    console.log('He is passed with minimum percentage');
}else if (marks > 50 && marks < 75){
    console.log('He is passed with good percentage');
}else {
    console.log('He is passed with Distiction');
}
return '';
}

console.log(abc());