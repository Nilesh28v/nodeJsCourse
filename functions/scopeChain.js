//in scope cahinig function ask value to bigger func then its

var name =  'nilesh';

console.log('hello from line 3',name);

function sayName(){
    var name = 'vishwakarma';  //if i comment out this line 
    console.log('hello from line 7',name);  //this name will take 'nilesh' as name
    sayNameTwo();

    function sayNameTwo(){
        console.log('hello from line 11',name);  //this name is comming from sayName() variable
    }
}

sayName();
