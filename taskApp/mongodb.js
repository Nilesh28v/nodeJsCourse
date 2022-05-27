// const mongodb=require('mongodb')
// const Mongoclient= mongodb.MongoClient  //it gives access to do all CRUD opertion
// const ObjectID=mongodb.ObjectId;

//we just destructured above thing to below

const{MongoClient,ObjectId}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'  //we can also use localhost insted of 127.0.0.1 but sometime it slow down the process
const databaseName='task-manager';
// const id= new ObjectId()
// console.log(id);
// console.log(id.id);  //objeect id'are acutally binary we can access like this
// console.log(id.id.length);//this will give 12 bcz object is consist of 12 byttese
// console.log(id.toHexString().length); //this will make object which is in binary to string but the length of object id will become 24 from 12
// // console.log(id.getTimestamp()); //object id is made of 12 bytes and 4 bytes are for timing we can access by gettimestamp functino
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to database');
    }
    const db=client.db(databaseName);



    db.collection('tasks').updateMany({
        completed:false
    },{
        $set:{
            completed:true
        }
    }).then((result)=>{
        console.log('done',result);
    })
    .catch((error)=>{
        console.log('got some error',error);
    })








    // const updatePromise=db.collection('users').updateOne({
    //     _id:new ObjectId ("628de94d34156f8a27cfb517")
    // },{
    //     $inc:{    //here we can use $set or any other methods available
    //         age: 1
    //     }
    // })
    // updatePromise.then((result)=>{  //update returns promise so we store update query to variable and using the .then and .catch there functionalty
    //     console.log(result);

    // }).catch((error)=>{
    //     console.log(error);

    // })




    // db.collection('users').findOne({_id:new ObjectId('628de91da9c4631524f28be4')},(error,user)=>{  //we give _id='id name' but it is not working bcz it is binary we have to use function  
    //     if(error){
    //         return console.log('unable to fetch'); 
    //     }
    //     console.log(user);

    // })


    // db.collection('users').find({age:25}).toArray((error,users)=>{  //toarray returns cursor
    //     console.log(users);
    // }) 
    
    // db.collection('users').find({age:25}).count((error,count)=>{
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({_id:new ObjectId("628debf68004af62c24b2548")},(error,task)=>{   //findone return callback
    //     console.log(task);

    // })
    // db.collection('tasks').find({completed:false}).toArray((error,tasks )=>{
    //     console.log(tasks);
    // })     //this will give all records that are not resolved   //find returns cursor

 

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'saurabh',
    //     age:28
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert data');
    //     }
    //     console.log(result.insertedId);

    // })


    // db.collection('users').insertMany([
    //     {
    //         name:'Jenifer',
    //         age:33
    //     },{
    //         name:'ram',
    //         age:28
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         console.log('unable to insert many values')
    //     }
    //     console.log(result.insertedCount);    
    // })



    // db.collection('tasks').insertMany([{
    //     description:'running',
    //     completed:false

    // },
    // {
    //     description:'finished',
    //     completed:true
    // },
    // {
    //     description:'starting',
    //     completed:false
    // }
    // ],(error,result)=>{
    //     if(error){
    //         console.log('Data Not inserted');
    //     }
    //     console.log(result.insertedCount);

    // })

})