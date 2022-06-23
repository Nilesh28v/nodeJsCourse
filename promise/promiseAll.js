const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise1');
        reject('promise 1 was rejected')
    },500)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise2');
        resolve('value2')

    },1500)
})
Promise.all([promise1,promise2]).then(    //then block only will runs if all promise resolved succesfully.
    (values)=>{
        console.log('everythin resolve');
        console.log(values);


    }
).catch(
    (reason)=>{
        console.log('one failed');
        console.log(reason);

    }
)