function getAllStudent(){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve(["student","virendra","Nilesh"]);
      },2000);
  });
}

// getAllStudent().then(students=>{
//     console.log(students)
// }).catch(err=>{
//     console.log("Error..")
// });

//same

async function DoSomething(){
    const student = await getAllStudent();
    console.log(student);
}
DoSomething();