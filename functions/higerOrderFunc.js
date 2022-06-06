function sayHello(){     //higher order function or first class functino
    function hello(){
        console.log('Hello from inner function');
    }
    return hello; 
}
const hello = sayHello();
hello();