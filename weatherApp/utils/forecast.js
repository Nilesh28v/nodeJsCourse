const request=require('postman-request')
const forecast=(lat,lon,callback)=>{
    const weather = 'http://api.weatherstack.com/current?access_key=0507fe86a16555e61226fcc3d2fa03ca&query='+lat+','+lon;
    request({url:weather,json:true},(error,{body})=>{   //here i removed response.body to body bcz i only want to access body
      if(error){
        callback('unable to connect to network',undefined)
      }else if(body.error){   //here also before i'm using response.body.error but now only body.error
        callback('wrong cordinates',undefined)
      }
      else{ 
        callback(undefined,'current Temperature is ' + body.current.temperature + ' and it feels like ' + body.current.feelslike
        )
      }
  
    })
  }

module.exports=forecast;