function sendEmail(){
    console.log('Email sending...');
}
function doSomething(){
    console.log('Doing something');
}

function placeOrder(product, callback){
    console.log('order is placing for product', product);
    callback();
}

placeOrder('laptop',doSomething);
placeOrder('phone',sendEmail);