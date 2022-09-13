const dbConnect=require('./mongodb')

const insert=async()=>{
    const db= await dbConnect.connFun()
    const collection=db.collection("hello")
    const result=await collection.insertMany([
        {name:"max 1",brand:"ipun",price:44},
        {name:"max 2",brand:"ipun",price:32},
        {name:"max 3",brand:"ipun",price:65}
    ]
        
    )
    console.log(result);
}

insert()