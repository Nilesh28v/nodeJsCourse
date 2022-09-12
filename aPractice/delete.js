const connect=require("./mongodb")

const deleteDoc=async()=>{
    let db=await connect.connFun();
    let collection=await db.collection('hello')
    let result=await collection.deleteOne({name:"nilesh"})
    if(result.deletedCount==0){
        console.log('not delted');
    }
    else{
        console.log(' deleted');
    }

}
deleteDoc()