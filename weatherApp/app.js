const { response } = require('express');
const request = require('postman-request');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast')

//we have move request codes to utils folder

// const url = 'http://api.weatherstack.com/current?access_key=0507fe86a16555e61226fcc3d2fa03ca&query=23.1869134,77.4728156';
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to weather services!');
//   } else if (response.body.error) {
//     console.log('unable to find location');
//   } else {
//     console.log('current Temperature is ' + response.body.current.temperature + ' and it feels like ' + response.body.current.feelslike);
//     // const data=JSO N.parse(response.body)  //we dont need this because we used json:true  
//   }
// })

// const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlsZXNoMjh2IiwiYSI6ImNsMzFrMHZqMjBjcWozaW9qZDAwaGVmNmUifQ.0jAjLHP6WI-rd9HFJUTtTg';

// request({ url: geoURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to location services!');
//   } else if (response.body.features.length === 0) {
//     console.log('unable to find location, Try another search');
//   } else {

//     console.log('latitude ' + response.body.features[0].center[1] + ' longitude  ' + response.body.features[0].center[0]);
//   }
// }) 


//we are calling functions

// forecast(23.100,77.500,(error,data)=>{
//   console.log('error',error);
//   console.log('data',data);
//  })
// geocode('indore',(error,data)=>{
//   console.log('error',error);
//   console.log('data',data);


// })

//we want to take values from geocode and use it in forecast function

const address=process.argv[2];

if(!address){
  console.log('please provide address');
}else{
  geocode(address,(error,{latitude,longitude,location}={})=>{
    if(error){
      return console.log(error);
    }
    forecast(latitude,longitude,(error,forecastData)=>{
      if(error){
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
      
     })  
  })
}
