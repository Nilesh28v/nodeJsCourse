console.log('Client side js file is loaded.');
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);

//     })

// })


const weatherForm=document.querySelector('form');
const search=document.querySelector('input')
const messageOne=document.querySelector('#message1')

messageOne.textContent='from javascript'
weatherForm.addEventListener('submit',(e)=>{ //e=event
    e.preventDefault()
    const location=search.value;
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
       if(data.error){
           console.log(data.error);

       }else{
           console.log(data.location);
           console.log(data.forecast);

       }

    })

})

})