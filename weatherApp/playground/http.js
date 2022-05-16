const http=require('http');
const url='http://api.weatherstack.com/current?access_key=0507fe86a16555e61226fcc3d2fa03ca&query=23.1911896,77.4834914';
const request=http.request(url,(response)=>{
    let data=''
    response.on ('data',(chunk)=>{
        data=data+chunk.toString()
        console.log(chunk); 

    }) //response.on is for registering handler
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body);

    })
    request.on('error',(error)=>{
        console.log('An Error',error);
    })
})
request.end()