//promise - its an object in JS, it basically has 3 stages, pending, fulfilled, rejected
//we use them as an alternative for callbacks in the places where ealy is involved.

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('function: your promise has been resolved');
                resolve();
            }
            else {
                console.log('Your promise has been not resoled');
                reject('sorry Rejected');
            }

        }, 2000);

    })
}

func1().then(function () {
    console.log('Nilesh: Thanks for resolving');
}).catch(function () {
    console.log('Nilesh: Very bad')
})